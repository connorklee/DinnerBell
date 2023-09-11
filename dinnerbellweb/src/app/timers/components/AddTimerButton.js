import React from "react"
import { Button } from "@nextui-org/button"
import { BsPlusLg } from "react-icons/bs"


const AddTimerButton = ({ setIsActiveTimers }) => {
    return (
        <div>
            <Button isIconOnly radius="full" size="lg" className="add-timer-button shadow-lg" onPress={() => setIsActiveTimers(true)}>
                <BsPlusLg />
            </Button>
        </div>
    )
}

export default AddTimerButton