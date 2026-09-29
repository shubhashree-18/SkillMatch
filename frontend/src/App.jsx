import { useState } from "react";
import "./App.css";

function App() {
  const [studentId, setStudentId] = useState("S001");
  const [studentName, setStudentName] = useState("");
  const [recommendationCount, setRecommendationCount] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getRecommendations = async () => {
    const cleanStudentId = studentId.trim().toUpperCase();

    if (!cleanStudentId) {
      setError("Please enter Student ID");
      setStudentName("");
      setRecommendationCount(0);
      setRecommendations([]);
      return;
    }

    setStudentId(cleanStudentId);
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:5000/api/recommendations/student/${cleanStudentId}/jobs`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message || "Unable to get recommendations"
        );
      }

      setStudentName(data.studentName || "");
      setRecommendationCount(data.recommendationCount || 0);
      setRecommendations(data.recommendations || []);

    } catch (err) {
      console.error("API Error:", err);

      setError("Unable to connect to backend");

      setStudentName("");
      setRecommendationCount(0);
      setRecommendations([]);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="skillmatch-container">
      <div className="skillmatch-wrapper">

        {/* =========================================
            HEADER
        ========================================= */}
        <header className="header">
          <h1>SkillMatch</h1>
          <p>AI-Powered Job Recommendations</p>
        </header>

        {/* =========================================
            STUDENT SUMMARY
        ========================================= */}
        {studentName && !loading && !error && (
          <div className="student-summary">
            <h2>
              Welcome, {studentName} 👋
            </h2>

            <p>
              {recommendationCount} job recommendations found
            </p>
          </div>
        )}

        {/* =========================================
            STUDENT SEARCH
        ========================================= */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <button onClick={getRecommendations}>
            Get Recommendations
          </button>
        </div>

        {/* =========================================
            LOADING
        ========================================= */}
        {loading && (
          <div className="loading">
            Loading recommendations...
          </div>
        )}

        {/* =========================================
            ERROR
        ========================================= */}
        {error && (
          <div className="error">
            <h3>Something went wrong</h3>
            <p>{error}</p>
          </div>
        )}

        {/* =========================================
            RECOMMENDATIONS
        ========================================= */}
        {!loading && recommendations.length > 0 && (
          <div className="jobs-grid">

            {recommendations.map((job) => {

              const total = Number(
                job.totalRequiredSkills || 0
              );

              const matched = Number(
                job.matchedSkillCount || 0
              );

              const percentage =
                total > 0
                  ? Math.round((matched / total) * 100)
                  : 0;

              // =========================================
              // MATCH LEVEL
              // =========================================
              let matchLevel = "Low Match";

              if (percentage >= 80) {
                matchLevel = "Excellent Match";
              } else if (percentage >= 60) {
                matchLevel = "Strong Match";
              } else if (percentage >= 40) {
                matchLevel = "Good Match";
              } else if (percentage >= 20) {
                matchLevel = "Partial Match";
              }

              // =========================================
              // TOP MATCH
              // =========================================
              const isTopMatch =
                recommendations.length > 0 &&
                job.roleId === recommendations[0].roleId;

              return (
                <div
                  className="job-card"
                  key={job.roleId}
                >

                  {/* =========================================
                      TOP MATCH
                  ========================================= */}
                  {isTopMatch && (
                    <div className="top-match">
                      ⭐ Top Match
                    </div>
                  )}

                  {/* =========================================
                      JOB HEADER
                  ========================================= */}
                  <div className="job-header">

                    <div>
                      <h2 className="job-title">
                        {job.roleName}
                      </h2>

                      <div className="role-id">
                        {job.roleId}
                      </div>
                    </div>

                    <div className="match-badge">
                      <strong>
                        {percentage}% Match
                      </strong>

                      <small>
                        {matchLevel}
                      </small>
                    </div>

                  </div>

                  {/* =========================================
                      MATCH INFORMATION
                  ========================================= */}
                  <div className="match-info">

                    <strong>
                      {matched} / {total} skills matched
                    </strong>

                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${percentage}%`
                        }}
                      ></div>
                    </div>

                  </div>

                  {/* =========================================
                      MATCHED SKILLS
                  ========================================= */}
                  <h3 className="section-title">
                    Matched Skills
                  </h3>

                  {job.matchedSkills &&
                  job.matchedSkills.length > 0 ? (

                    <div className="skills-list">

                      {job.matchedSkills.map((skill) => (
                        <span
                          className="skill matched-skill"
                          key={skill}
                        >
                          ✓ {skill}
                        </span>
                      ))}

                    </div>

                  ) : (

                    <p className="no-skills">
                      No matched skills
                    </p>

                  )}

                  {/* =========================================
                      MISSING SKILLS
                  ========================================= */}
                  {job.missingSkills &&
                  job.missingSkills.length > 0 && (

                    <>
                      <h3 className="section-title">
                        Missing Skills
                      </h3>

                      <div className="skills-list">

                        {job.missingSkills.map((skill) => (
                          <span
                            className="skill missing-skill"
                            key={skill}
                          >
                            ⚠ {skill}
                          </span>
                        ))}

                      </div>
                    </>

                  )}

                  {/* =========================================
                      AVAILABLE JOBS
                  ========================================= */}
                  <h3 className="section-title">
                    Available Jobs
                  </h3>

                  <ul className="jobs-list">

                    {job.jobs &&
                      job.jobs.map((title) => (
                        <li key={title}>
                          {title}
                        </li>
                      ))}

                  </ul>

                </div>
              );
            })}

          </div>
        )}

        {/* =========================================
            NO RECOMMENDATIONS
        ========================================= */}
        {recommendations.length === 0 &&
          !loading &&
          !error && (

            <div className="no-results">

              <h2>
                No Recommendations Found
              </h2>

              <p>
                No job recommendations were found for this
                Student ID. Please check the Student ID and
                try again.
              </p>

            </div>

          )}

        {/* =========================================
            FOOTER
        ========================================= */}
        <div className="footer">
          SkillMatch © 2026 | AI-Powered Career Recommendations
        </div>

      </div>
    </div>
  );
}

export default App;