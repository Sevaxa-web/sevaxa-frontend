import type { ReactNode } from "react";

type CheckMarkBadgeProps = {
    icon: ReactNode;
    text: string;
}

export default function CheckMarkBadge({ icon, text }: CheckMarkBadgeProps){
    return(
    <div className="check-mark-container">
        {icon}
        <p>{text}</p>
    </div>
    );
}