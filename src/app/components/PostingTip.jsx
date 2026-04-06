import React from "react";
import {Info, FileText, CheckCircle, Code, Tag} from "lucide-react";

const tips = [
    {
        icon: <FileText size={20}/>,
        title: "Specific Title",
        descent: "Summarize your issue in one line with clear keywords."
    },
    {
        icon: <FileText size={20}/>,
        title: "Clear Description",
        descent: "Explain the context and what you are trying to achieve."
    },
    {
        icon: <FileText size={20}/>,
        title: "Share Progress",
        descent: "List what you've already tried to fix the problem."
    },
    {
        icon: <FileText size={20}/>,
        title: "Use Snippets",
        descent: "Paste raw code or logs into the snippet box for better readability."
    },
    {
        icon: <FileText size={20}/>,
        title: "Tag Correctly",
        descent: "Use accurate tags to reach the right experts faster.."
    }
];
export default function PostingTip() {
    return (
        <div className="max-w-sm p-6 border rounded-2xl shadow-md bg-white">
            <h1 className="text-lg font-semibold mb-5 text-gray-800 capitalize">posting tips</h1>
            <div className="space-y-4">
                {tips.map((tip, index) =>
                    <div key={index}>
                        <div>
                            {tip.icon}
                        </div>
                        <div>
                            <h3>
                                {tip.title}
                            </h3>
                            <p>
                                {tip.descent}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}