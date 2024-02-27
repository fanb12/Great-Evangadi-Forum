import React from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./answer.module.css";
import { Link } from "react-router-dom";
function Answer() {
	return (
		<Layout>
			<div>
				<div className={classes.questionAns__wrapper}>
					<h2 className={classes.questionAns__title}> QUESTION</h2>

					<Link to="/Home">
						<button className={classes.answerButton}>
							{" "}
							View Other Questions{" "}
						</button>
					</Link>

					<br />
				</div>
				<div>
					<div className={classes.voteQuestion__wrapper}>
						<div className={classes.titleTimeLaps__wrap}>
							<h3>question-title</h3>

							<div className={classes.time_wrap}>(..days ago)</div>
						</div>
					</div>
				</div>
				<div>
					<h4>description of your question here</h4>
				</div>
			</div>
			<div className={classes.operations}>
				<div className={classes.questionOperations}>
					<button className={classes.editQuestion}> EDIT</button>
					<button className={classes.deleteQuestion}> DELETE</button>
				</div>

				<form className={classes.answer__form}>
					<h2>Answer for the above question</h2>
					<Link to="/Home">
						<button>Go to Question page</button>
					</Link>
					
					<textarea
						className={classes.answer__description}
						type="text"
						name="answer"
						placeholder="place your answer here"
					></textarea>
					<button classname={classes.answer_posted}>
						<div>POST YOUR ANSWER HERE</div>
					</button>
				</form>
			</div>
		</Layout>
	);
}
export default Answer;