from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/portfolio", methods=["GET"])
def portfolio():
    data = {
        "name": "Ezra Mwalongo",
        "title": "Dedicated Data Scientist",
        "profile": (
            "I am a dedicated Data Scientist with a strong academic background and practical expertise "
            "in data analysis, machine learning, and big data technologies. My passion lies in transforming "
            "complex datasets into actionable insights, building predictive models, and applying statistical "
            "methods to solve real world problems. I thrive in environments that demand analytical thinking, "
            "innovation, and precision."
        ),
        "qualifications": [
            "Bachelor of Science in Data Science",
            "Specialized training in data analysis, visualization, and machine learning",
            "Hands-on experience with statistical modeling and performance evaluation"
        ],
        "competencies": [
            "Data Analysis & Manipulation: Skilled in cleaning, transforming, and interpreting large datasets.",
            "Data Visualization: Proficient in impactful visualizations to communicate insights.",
            "Machine Learning Model Development: Designing, training, and deploying predictive models.",
            "Big Data Technologies: Handling large scale data using modern tools and frameworks.",
            "Model Performance Analysis: Evaluating, tuning, and optimizing models for accuracy."
        ],
        "skills": [
            "Excel (Advanced analysis & reporting)",
            "R Programming (Statistical computing)",
            "Python (ML, automation, data manipulation)",
            "SQL (Database design & querying)",
            "Big Data Tools (Hadoop, cloud platforms)",
            "Version Control (Git/GitHub)",
            "Visualization Libraries (Matplotlib, Seaborn, ggplot2, Power BI)"
        ],
        "experience": [
            "Conducted end-to-end data science projects, from data collection to deployment.",
            "Collaborated on cross-functional teams to deliver analytical solutions.",
            "Applied statistical methods to improve decision making in academic and professional projects.",
            "Presented technical findings to non-technical audiences with strong communication skills."
        ],
        "contact": {
            "email": "ezramwalongo@gmail.com",
            "phone": "06544704448",
            "location": "Tanzania"
        }
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

