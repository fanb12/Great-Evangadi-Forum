import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import classes from "./asquestion.module.css";

function Askquestion() {
	return (
		<Layout>
			<div className={classes.askQuestion}>
				<div className={classes.askQuestion__wrapper}>
					<div className={classes.howToAsk}>
						<h2> BELOW ARE CRITERIONS FOR A WELL-DEFINED QUESTION</h2>
						<ul>
							<li> try to Summarize your problem in a single-lined title.</li>
							<li>Describe your problem in more detail.</li>
							<li>Describe your problem in more detail.</li>
							<li>Review your Question and post it to the site.</li>
						</ul>
					</div>
					<div className={classes.askYourQuestion}>
						<Link to="/Home">
							<button className={classes.solved}>
								check if your question has been solved already{" "}
							</button>
						</Link>

						<form className={classes.questionForm}>
							<h2>Ask a public question to get it solved.</h2>

							<input
								className={classes.question_title}
								type="text"
								name="title"
								placeholder="Question Title"
							/>

							<br />
							<input
								className={classes.question_tag}
								type="text"
								name="tag"
								placeholder="Question Tag"
							/>
							<textarea
								className={classes.question_description}
								type="text"
								name="description"
								placeholder="Describe your question here..."
							></textarea>

							<button className={classes.question_post}>submit question</button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Askquestion;
