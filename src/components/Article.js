import React from "react";

export default function Article({ title, date = "January 1, 1970", preview, minutes }){
    let coffee = "☕️";
    let box = "🍱";
    function minutesRead() {
    if (minutes <30){
        coffee = coffee.repeat(Math.ceil(minutes/5))
        return (coffee)
    }else{
        if(minutes >30){
            box = box.repeat(Math.ceil(minutes/10))
            return (box)
        }
    }

}

return (
    <article>
        <h3>
            {title}
        </h3>
        <small>
            {date} . {"    "}
            {minutesRead()} Minutes Read
        </small>
        <p>
            {preview}
        </p>
    </article>
)
}