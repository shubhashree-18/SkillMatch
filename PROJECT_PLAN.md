# SkillMatch – Student Skill & Job Recommendation System

## Objective
A graph-based application that recommends suitable job roles
and job opportunities to students based on their skills.
It also identifies missing skills and recommends relevant
courses to improve employability.

## Nodes
- Student
- Skill
- JobRole
- Job
- Company
- Course

## Relationships
- Student → HAS_SKILL → Skill
- Skill → REQUIRED_FOR → JobRole
- JobRole → HAS_JOB → Job
- Job → POSTED_BY → Company
- Skill → TAUGHT_BY → Course
- Skill → RELATED_TO → Skill

## Main Features
1. Student Profile
2. Skill Analysis
3. Job Recommendation
4. Skill Gap Analysis
5. Course Recommendation

## Technology
- Frontend: React.js
- Backend: Node.js + Express.js
- Database: CognoDB
- Database Driver: Official Neo4j JavaScript Driver