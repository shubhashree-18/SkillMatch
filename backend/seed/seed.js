const driver = require("../config/database");

async function seedDatabase() {
  const session = driver.session();

  try {
    console.log("Starting SkillMatch database seed...");

    // Clear existing data so the seed can be safely re-run
    await session.run(`
      MATCH (n)
      DETACH DELETE n
    `);

    // --------------------------------------------------
    // STUDENTS
    // --------------------------------------------------

    await session.run(`
      CREATE
        (:Student {
          id: "S001",
          name: "Arun Kumar",
          education: "B.E Computer Science",
          experience: 0
        }),
        (:Student {
          id: "S002",
          name: "Priya Sharma",
          education: "B.Tech Information Technology",
          experience: 1
        }),
        (:Student {
          id: "S003",
          name: "Rahul Raj",
          education: "B.Sc Computer Science",
          experience: 0
        }),
        (:Student {
          id: "S004",
          name: "Divya S",
          education: "B.E Information Technology",
          experience: 2
        }),
        (:Student {
          id: "S005",
          name: "Karthik M",
          education: "B.E Computer Science",
          experience: 1
        })
    `);

    console.log("Students created.");

    // --------------------------------------------------
    // SKILLS
    // --------------------------------------------------

    await session.run(`
      CREATE
        (:Skill {id: "SK001", name: "JavaScript"}),
        (:Skill {id: "SK002", name: "React.js"}),
        (:Skill {id: "SK003", name: "HTML"}),
        (:Skill {id: "SK004", name: "CSS"}),
        (:Skill {id: "SK005", name: "TypeScript"}),
        (:Skill {id: "SK006", name: "Node.js"}),
        (:Skill {id: "SK007", name: "Express.js"}),
        (:Skill {id: "SK008", name: "Java"}),
        (:Skill {id: "SK009", name: "Spring Boot"}),
        (:Skill {id: "SK010", name: "MySQL"}),
        (:Skill {id: "SK011", name: "MongoDB"}),
        (:Skill {id: "SK012", name: "Python"}),
        (:Skill {id: "SK013", name: "Git"}),
        (:Skill {id: "SK014", name: "GitHub"}),
        (:Skill {id: "SK015", name: "AWS"}),
        (:Skill {id: "SK016", name: "Docker"}),
        (:Skill {id: "SK017", name: "REST API"}),
        (:Skill {id: "SK018", name: "Figma"}),
        (:Skill {id: "SK019", name: "Problem Solving"}),
        (:Skill {id: "SK020", name: "Communication"})
    `);

    console.log("Skills created.");

    // --------------------------------------------------
    // JOB ROLES
    // --------------------------------------------------

    await session.run(`
      CREATE
        (:JobRole {id: "JR001", name: "Frontend Developer"}),
        (:JobRole {id: "JR002", name: "React Developer"}),
        (:JobRole {id: "JR003", name: "Backend Developer"}),
        (:JobRole {id: "JR004", name: "Java Developer"}),
        (:JobRole {id: "JR005", name: "Full Stack Developer"}),
        (:JobRole {id: "JR006", name: "DevOps Engineer"}),
        (:JobRole {id: "JR007", name: "UI/UX Designer"}),
        (:JobRole {id: "JR008", name: "Python Developer"})
    `);

    console.log("Job roles created.");

    // --------------------------------------------------
    // COMPANIES
    // --------------------------------------------------

    await session.run(`
      CREATE
        (:Company {id: "C001", name: "TechNova Solutions"}),
        (:Company {id: "C002", name: "CloudBridge Technologies"}),
        (:Company {id: "C003", name: "CodeCraft Systems"}),
        (:Company {id: "C004", name: "InnoSoft Labs"}),
        (:Company {id: "C005", name: "DataSphere Technologies"}),
        (:Company {id: "C006", name: "WebWorks India"}),
        (:Company {id: "C007", name: "NextGen Digital"}),
        (:Company {id: "C008", name: "AppVertex Solutions"})
    `);

    console.log("Companies created.");

    // --------------------------------------------------
    // JOBS
    // --------------------------------------------------

    await session.run(`
      CREATE
        (:Job {
          id: "J001",
          title: "Junior Frontend Developer",
          location: "Chennai",
          experience: 0,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J002",
          title: "React Developer",
          location: "Bangalore",
          experience: 1,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J003",
          title: "Node.js Backend Developer",
          location: "Chennai",
          experience: 1,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J004",
          title: "Junior Java Developer",
          location: "Hyderabad",
          experience: 0,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J005",
          title: "Full Stack Developer",
          location: "Bangalore",
          experience: 1,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J006",
          title: "DevOps Engineer",
          location: "Pune",
          experience: 2,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J007",
          title: "UI/UX Designer",
          location: "Chennai",
          experience: 0,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J008",
          title: "Python Developer",
          location: "Bangalore",
          experience: 1,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J009",
          title: "Frontend Engineer",
          location: "Coimbatore",
          experience: 0,
          employmentType: "Full Time"
        }),
        (:Job {
          id: "J010",
          title: "Backend Engineer",
          location: "Chennai",
          experience: 1,
          employmentType: "Full Time"
        })
    `);

    console.log("Jobs created.");

    // --------------------------------------------------
    // COURSES
    // --------------------------------------------------

    await session.run(`
      CREATE
        (:Course {
          id: "CR001",
          name: "Modern React Development",
          platform: "Coursera"
        }),
        (:Course {
          id: "CR002",
          name: "TypeScript Fundamentals",
          platform: "Udemy"
        }),
        (:Course {
          id: "CR003",
          name: "Node.js and Express",
          platform: "Udemy"
        }),
        (:Course {
          id: "CR004",
          name: "Java Spring Boot",
          platform: "Coursera"
        }),
        (:Course {
          id: "CR005",
          name: "AWS Cloud Fundamentals",
          platform: "AWS Skill Builder"
        }),
        (:Course {
          id: "CR006",
          name: "Docker for Developers",
          platform: "Udemy"
        }),
        (:Course {
          id: "CR007",
          name: "UI/UX Design with Figma",
          platform: "Coursera"
        }),
        (:Course {
          id: "CR008",
          name: "Python Programming",
          platform: "edX"
        }),
        (:Course {
          id: "CR009",
          name: "MySQL Database Essentials",
          platform: "Udemy"
        }),
        (:Course {
          id: "CR010",
          name: "Git and GitHub",
          platform: "Coursera"
        })
    `);

    console.log("Courses created.");

    // --------------------------------------------------
    // STUDENT → HAS_SKILL
    // --------------------------------------------------

    await session.run(`
      MATCH
        (s1:Student {id: "S001"}),
        (s2:Student {id: "S002"}),
        (s3:Student {id: "S003"}),
        (s4:Student {id: "S004"}),
        (s5:Student {id: "S005"}),

        (javascript:Skill {id: "SK001"}),
        (react:Skill {id: "SK002"}),
        (html:Skill {id: "SK003"}),
        (css:Skill {id: "SK004"}),
        (typescript:Skill {id: "SK005"}),
        (node:Skill {id: "SK006"}),
        (express:Skill {id: "SK007"}),
        (java:Skill {id: "SK008"}),
        (spring:Skill {id: "SK009"}),
        (mysql:Skill {id: "SK010"}),
        (python:Skill {id: "SK012"}),
        (git:Skill {id: "SK013"}),
        (github:Skill {id: "SK014"}),
        (aws:Skill {id: "SK015"}),
        (docker:Skill {id: "SK016"}),
        (rest:Skill {id: "SK017"}),
        (figma:Skill {id: "SK018"}),
        (problem:Skill {id: "SK019"}),
        (communication:Skill {id: "SK020"})

      CREATE
        (s1)-[:HAS_SKILL]->(javascript),
        (s1)-[:HAS_SKILL]->(react),
        (s1)-[:HAS_SKILL]->(html),
        (s1)-[:HAS_SKILL]->(css),
        (s1)-[:HAS_SKILL]->(git),
        (s1)-[:HAS_SKILL]->(github),
        (s1)-[:HAS_SKILL]->(communication),

        (s2)-[:HAS_SKILL]->(javascript),
        (s2)-[:HAS_SKILL]->(react),
        (s2)-[:HAS_SKILL]->(typescript),
        (s2)-[:HAS_SKILL]->(node),
        (s2)-[:HAS_SKILL]->(rest),
        (s2)-[:HAS_SKILL]->(git),

        (s3)-[:HAS_SKILL]->(java),
        (s3)-[:HAS_SKILL]->(spring),
        (s3)-[:HAS_SKILL]->(mysql),
        (s3)-[:HAS_SKILL]->(git),
        (s3)-[:HAS_SKILL]->(problem),

        (s4)-[:HAS_SKILL]->(javascript),
        (s4)-[:HAS_SKILL]->(node),
        (s4)-[:HAS_SKILL]->(express),
        (s4)-[:HAS_SKILL]->(mongodb),
        (s4)-[:HAS_SKILL]->(rest),

        (s5)-[:HAS_SKILL]->(python),
        (s5)-[:HAS_SKILL]->(mysql),
        (s5)-[:HAS_SKILL]->(git),
        (s5)-[:HAS_SKILL]->(aws),
        (s5)-[:HAS_SKILL]->(docker)
    `);

    console.log("Student skills connected.");

    // --------------------------------------------------
    // JOB ROLE → REQUIRES → SKILL
    // --------------------------------------------------

    await session.run(`
      MATCH
        (frontend:JobRole {id: "JR001"}),
        (reactRole:JobRole {id: "JR002"}),
        (backend:JobRole {id: "JR003"}),
        (javaRole:JobRole {id: "JR004"}),
        (fullstack:JobRole {id: "JR005"}),
        (devops:JobRole {id: "JR006"}),
        (uiux:JobRole {id: "JR007"}),
        (pythonRole:JobRole {id: "JR008"}),

        (javascript:Skill {id: "SK001"}),
        (react:Skill {id: "SK002"}),
        (html:Skill {id: "SK003"}),
        (css:Skill {id: "SK004"}),
        (typescript:Skill {id: "SK005"}),
        (node:Skill {id: "SK006"}),
        (express:Skill {id: "SK007"}),
        (java:Skill {id: "SK008"}),
        (spring:Skill {id: "SK009"}),
        (mysql:Skill {id: "SK010"}),
        (python:Skill {id: "SK012"}),
        (aws:Skill {id: "SK015"}),
        (docker:Skill {id: "SK016"}),
        (rest:Skill {id: "SK017"}),
        (figma:Skill {id: "SK018"}),
        (problem:Skill {id: "SK019"}),
        (communication:Skill {id: "SK020"})

      CREATE
        (frontend)-[:REQUIRES]->(javascript),
        (frontend)-[:REQUIRES]->(html),
        (frontend)-[:REQUIRES]->(css),
        (frontend)-[:REQUIRES]->(react),
        (frontend)-[:REQUIRES]->(communication),

        (reactRole)-[:REQUIRES]->(javascript),
        (reactRole)-[:REQUIRES]->(react),
        (reactRole)-[:REQUIRES]->(typescript),
        (reactRole)-[:REQUIRES]->(html),
        (reactRole)-[:REQUIRES]->(css),

        (backend)-[:REQUIRES]->(javascript),
        (backend)-[:REQUIRES]->(node),
        (backend)-[:REQUIRES]->(express),
        (backend)-[:REQUIRES]->(rest),
        (backend)-[:REQUIRES]->(mysql),

        (javaRole)-[:REQUIRES]->(java),
        (javaRole)-[:REQUIRES]->(spring),
        (javaRole)-[:REQUIRES]->(mysql),
        (javaRole)-[:REQUIRES]->(rest),

        (fullstack)-[:REQUIRES]->(javascript),
        (fullstack)-[:REQUIRES]->(react),
        (fullstack)-[:REQUIRES]->(node),
        (fullstack)-[:REQUIRES]->(express),
        (fullstack)-[:REQUIRES]->(mysql),

        (devops)-[:REQUIRES]->(aws),
        (devops)-[:REQUIRES]->(docker),
        (devops)-[:REQUIRES]->(git),
        (devops)-[:REQUIRES]->(communication),

        (uiux)-[:REQUIRES]->(figma),
        (uiux)-[:REQUIRES]->(communication),
        (uiux)-[:REQUIRES]->(problem),

        (pythonRole)-[:REQUIRES]->(python),
        (pythonRole)-[:REQUIRES]->(mysql),
        (pythonRole)-[:REQUIRES]->(rest)
    `);

    console.log("Job role requirements connected.");

    // --------------------------------------------------
    // SKILL → REQUIRED_FOR → JOB ROLE
    // --------------------------------------------------

    await session.run(`
      MATCH
        (javascript:Skill {id: "SK001"}),
        (react:Skill {id: "SK002"}),
        (html:Skill {id: "SK003"}),
        (css:Skill {id: "SK004"}),
        (typescript:Skill {id: "SK005"}),
        (node:Skill {id: "SK006"}),
        (express:Skill {id: "SK007"}),
        (java:Skill {id: "SK008"}),
        (spring:Skill {id: "SK009"}),
        (mysql:Skill {id: "SK010"}),
        (python:Skill {id: "SK012"}),
        (aws:Skill {id: "SK015"}),
        (docker:Skill {id: "SK016"}),
        (rest:Skill {id: "SK017"}),
        (figma:Skill {id: "SK018"}),

        (frontend:JobRole {id: "JR001"}),
        (reactRole:JobRole {id: "JR002"}),
        (backend:JobRole {id: "JR003"}),
        (javaRole:JobRole {id: "JR004"}),
        (fullstack:JobRole {id: "JR005"}),
        (devops:JobRole {id: "JR006"}),
        (uiux:JobRole {id: "JR007"}),
        (pythonRole:JobRole {id: "JR008"})

      CREATE
        (javascript)-[:REQUIRED_FOR]->(frontend),
        (react)-[:REQUIRED_FOR]->(frontend),
        (html)-[:REQUIRED_FOR]->(frontend),
        (css)-[:REQUIRED_FOR]->(frontend),

        (javascript)-[:REQUIRED_FOR]->(reactRole),
        (react)-[:REQUIRED_FOR]->(reactRole),
        (typescript)-[:REQUIRED_FOR]->(reactRole),

        (javascript)-[:REQUIRED_FOR]->(backend),
        (node)-[:REQUIRED_FOR]->(backend),
        (express)-[:REQUIRED_FOR]->(backend),
        (rest)-[:REQUIRED_FOR]->(backend),

        (java)-[:REQUIRED_FOR]->(javaRole),
        (spring)-[:REQUIRED_FOR]->(javaRole),
        (mysql)-[:REQUIRED_FOR]->(javaRole),

        (javascript)-[:REQUIRED_FOR]->(fullstack),
        (react)-[:REQUIRED_FOR]->(fullstack),
        (node)-[:REQUIRED_FOR]->(fullstack),
        (mysql)-[:REQUIRED_FOR]->(fullstack),

        (aws)-[:REQUIRED_FOR]->(devops),
        (docker)-[:REQUIRED_FOR]->(devops),

        (figma)-[:REQUIRED_FOR]->(uiux),

        (python)-[:REQUIRED_FOR]->(pythonRole),
        (mysql)-[:REQUIRED_FOR]->(pythonRole)
    `);

    console.log("Skill to job role relationships created.");

    // --------------------------------------------------
    // JOB ROLE → HAS_JOB → JOB
    // --------------------------------------------------

    await session.run(`
      MATCH
        (frontend:JobRole {id: "JR001"}),
        (reactRole:JobRole {id: "JR002"}),
        (backend:JobRole {id: "JR003"}),
        (javaRole:JobRole {id: "JR004"}),
        (fullstack:JobRole {id: "JR005"}),
        (devops:JobRole {id: "JR006"}),
        (uiux:JobRole {id: "JR007"}),
        (pythonRole:JobRole {id: "JR008"}),

        (j1:Job {id: "J001"}),
        (j2:Job {id: "J002"}),
        (j3:Job {id: "J003"}),
        (j4:Job {id: "J004"}),
        (j5:Job {id: "J005"}),
        (j6:Job {id: "J006"}),
        (j7:Job {id: "J007"}),
        (j8:Job {id: "J008"}),
        (j9:Job {id: "J009"}),
        (j10:Job {id: "J010"})

      CREATE
        (frontend)-[:HAS_JOB]->(j1),
        (reactRole)-[:HAS_JOB]->(j2),
        (backend)-[:HAS_JOB]->(j3),
        (javaRole)-[:HAS_JOB]->(j4),
        (fullstack)-[:HAS_JOB]->(j5),
        (devops)-[:HAS_JOB]->(j6),
        (uiux)-[:HAS_JOB]->(j7),
        (pythonRole)-[:HAS_JOB]->(j8),
        (frontend)-[:HAS_JOB]->(j9),
        (backend)-[:HAS_JOB]->(j10)
    `);

    console.log("Jobs connected to roles.");

    // --------------------------------------------------
    // JOB → POSTED_BY → COMPANY
    // --------------------------------------------------

    await session.run(`
      MATCH
        (j1:Job {id: "J001"}),
        (j2:Job {id: "J002"}),
        (j3:Job {id: "J003"}),
        (j4:Job {id: "J004"}),
        (j5:Job {id: "J005"}),
        (j6:Job {id: "J006"}),
        (j7:Job {id: "J007"}),
        (j8:Job {id: "J008"}),
        (j9:Job {id: "J009"}),
        (j10:Job {id: "J010"}),

        (c1:Company {id: "C001"}),
        (c2:Company {id: "C002"}),
        (c3:Company {id: "C003"}),
        (c4:Company {id: "C004"}),
        (c5:Company {id: "C005"}),
        (c6:Company {id: "C006"}),
        (c7:Company {id: "C007"}),
        (c8:Company {id: "C008"})

      CREATE
        (j1)-[:POSTED_BY]->(c1),
        (j2)-[:POSTED_BY]->(c2),
        (j3)-[:POSTED_BY]->(c3),
        (j4)-[:POSTED_BY]->(c4),
        (j5)-[:POSTED_BY]->(c5),
        (j6)-[:POSTED_BY]->(c6),
        (j7)-[:POSTED_BY]->(c7),
        (j8)-[:POSTED_BY]->(c8),
        (j9)-[:POSTED_BY]->(c2),
        (j10)-[:POSTED_BY]->(c3)
    `);

    console.log("Jobs connected to companies.");

    // --------------------------------------------------
    // SKILL → TAUGHT_BY → COURSE
    // --------------------------------------------------

    await session.run(`
      MATCH
        (react:Skill {id: "SK002"}),
        (typescript:Skill {id: "SK005"}),
        (node:Skill {id: "SK006"}),
        (spring:Skill {id: "SK009"}),
        (mysql:Skill {id: "SK010"}),
        (aws:Skill {id: "SK015"}),
        (docker:Skill {id: "SK016"}),
        (figma:Skill {id: "SK018"}),
        (python:Skill {id: "SK012"}),
        (git:Skill {id: "SK013"}),

        (cr1:Course {id: "CR001"}),
        (cr2:Course {id: "CR002"}),
        (cr3:Course {id: "CR003"}),
        (cr4:Course {id: "CR004"}),
        (cr5:Course {id: "CR005"}),
        (cr6:Course {id: "CR006"}),
        (cr7:Course {id: "CR007"}),
        (cr8:Course {id: "CR008"}),
        (cr9:Course {id: "CR009"}),
        (cr10:Course {id: "CR010"})

      CREATE
        (react)-[:TAUGHT_BY]->(cr1),
        (typescript)-[:TAUGHT_BY]->(cr2),
        (node)-[:TAUGHT_BY]->(cr3),
        (spring)-[:TAUGHT_BY]->(cr4),
        (aws)-[:TAUGHT_BY]->(cr5),
        (docker)-[:TAUGHT_BY]->(cr6),
        (figma)-[:TAUGHT_BY]->(cr7),
        (python)-[:TAUGHT_BY]->(cr8),
        (mysql)-[:TAUGHT_BY]->(cr9),
        (git)-[:TAUGHT_BY]->(cr10)
    `);

    console.log("Courses connected to skills.");

    // --------------------------------------------------
    // SKILL → RELATED_TO → SKILL
    // --------------------------------------------------

    await session.run(`
      MATCH
        (javascript:Skill {id: "SK001"}),
        (react:Skill {id: "SK002"}),
        (typescript:Skill {id: "SK005"}),
        (node:Skill {id: "SK006"}),
        (express:Skill {id: "SK007"}),
        (java:Skill {id: "SK008"}),
        (spring:Skill {id: "SK009"}),
        (aws:Skill {id: "SK015"}),
        (docker:Skill {id: "SK016"}),
        (git:Skill {id: "SK013"}),
        (github:Skill {id: "SK014"}),

        (html:Skill {id: "SK003"}),
        (css:Skill {id: "SK004"}),
        (mysql:Skill {id: "SK010"}),
        (rest:Skill {id: "SK017"})

      CREATE
        (javascript)-[:RELATED_TO]->(react),
        (react)-[:RELATED_TO]->(typescript),
        (node)-[:RELATED_TO]->(express),
        (java)-[:RELATED_TO]->(spring),
        (aws)-[:RELATED_TO]->(docker),
        (git)-[:RELATED_TO]->(github),
        (html)-[:RELATED_TO]->(css),
        (node)-[:RELATED_TO]->(rest),
        (spring)-[:RELATED_TO]->(mysql)
    `);

    console.log("Related skills connected.");

    // --------------------------------------------------
    // FINAL COUNT
    // --------------------------------------------------

    const result = await session.run(`
      MATCH (n)
      RETURN labels(n)[0] AS type, count(n) AS count
      ORDER BY type
    `);

    console.log("\nDatabase seed completed successfully!");
    console.log("Node counts:");

    result.records.forEach((record) => {
      console.log(
        `${record.get("type")}: ${record.get("count").toString()}`
      );
    });

  } catch (error) {
    console.error("\nSeed failed:", error.message);
  } finally {
    await session.close();
    await driver.close();
  }
}

seedDatabase();