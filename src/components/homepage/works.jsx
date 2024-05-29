import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="/portfolio-sagar/maqsad.jpg"
								alt="maqsad"
								className="work-image"
							/>
							<div className="work-title">Maqsad Pvt Ltd.</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">
								Aug 2021 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="/portfolio-sagar/rove.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Rove Apps Pvt Ltd.</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								Aug 2020 - Aug 2021
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
