const express = require("express");
const router = express.Router();
const driver = require("../config/database");

// ==========================================
// JOB RECOMMENDATION ROUTE
// ==========================================
router.get("/student/:studentId/jobs", async (req, res) => {
  const { studentId } = req.params;
  const session = driver.session();

  try {

    const result = await session.run(
      `
      // ==========================================
      // STEP 1: Get student's skills
      // ==========================================
      MATCH (s:Student {id: $studentId})-[:HAS_SKILL]->(studentSkill:Skill)

      WITH
        s,
        collect(DISTINCT studentSkill) AS studentSkills

      // ==========================================
      // STEP 2: Get JobRoles and required skills
      // ==========================================
      MATCH (role:JobRole)-[:REQUIRES]->(requiredSkill)

      WITH
        s,
        studentSkills,
        role,
        collect(DISTINCT requiredSkill) AS requiredSkills

      // ==========================================
      // STEP 3: Find jobs connected to each role
      // ==========================================
      MATCH (role)-[:HAS_JOB]-(job:Job)

      WITH
        s,
        role,
        studentSkills,
        requiredSkills,
        collect(DISTINCT job.title) AS jobs

      // ==========================================
      // STEP 4: Find matched skills
      // ==========================================
      WITH
        s,
        role,
        studentSkills,
        requiredSkills,
        jobs,
        [skill IN requiredSkills
          WHERE skill IN studentSkills
        ] AS matchedSkillNodes

      // ==========================================
      // STEP 5: Return recommendation data
      // ==========================================
      RETURN
        s.name AS studentName,
        role.id AS roleId,
        role.name AS roleName,
        size(requiredSkills) AS totalRequiredSkills,
        size(matchedSkillNodes) AS matchedSkillCount,

        [skill IN matchedSkillNodes |
          skill.name
        ] AS matchedSkills,

        [skill IN requiredSkills
          WHERE NOT skill IN studentSkills
          | skill.name
        ] AS missingSkills,

        jobs

      ORDER BY matchedSkillCount DESC
      `,
      {
        studentId
      }
    );

    // ==========================================
    // CREATE RECOMMENDATIONS
    // ==========================================
    const recommendations = result.records.map((record) => {

      const studentName = record.get("studentName");

      const roleId = record.get("roleId");

      const roleName = record.get("roleName");

      const totalRequiredSkills =
        record.get("totalRequiredSkills").toNumber();

      const matchedSkillCount =
        record.get("matchedSkillCount").toNumber();

      const matchedSkills =
        record.get("matchedSkills");

      const missingSkills =
        record.get("missingSkills");

      const jobs =
        record.get("jobs");

      // ==========================================
      // MATCH PERCENTAGE
      // ==========================================
      const matchPercentage =
        totalRequiredSkills > 0
          ? Math.round(
              (matchedSkillCount / totalRequiredSkills) * 100
            )
          : 0;

      return {
        studentName,
        roleId,
        roleName,
        matchPercentage,
        matchedSkillCount,
        totalRequiredSkills,
        matchedSkills,
        missingSkills,
        jobs
      };
    });

    // ==========================================
    // GET STUDENT NAME
    // ==========================================
    const studentName =
      recommendations.length > 0
        ? recommendations[0].studentName
        : null;

    // ==========================================
    // SEND RESPONSE
    // ==========================================
    res.json({
      success: true,
      studentId,
      studentName,
      recommendationCount: recommendations.length,
      recommendations
    });

  } catch (error) {

    console.error("Recommendation error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to generate job recommendations",
      error: error.message
    });

  } finally {

    await session.close();

  }
});

// ==========================================
// EXPORT ROUTER
// ==========================================
module.exports = router;