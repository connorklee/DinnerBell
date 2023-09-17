"use client"

import AddTimerButton from "./components/AddTimerButton"
import React, { useState } from "react";
import Timer from "./components/Timer"
import TimerFrame from "./components/TimerFrame"

export default function TimersPage() {

	const [isActiveTimers, setIsActiveTimers] = useState(false)

	return (
		<div>
			{isActiveTimers
				? (<TimerFrame />)
				: (<div>
					No active timers
					<br />
					Click the '+' to add a timer
				</div>)
			}
			<AddTimerButton setIsActiveTimers={setIsActiveTimers} />
		</div>
	);
}
