"use client";

import { useEffect, useState } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

export type MarkdownProps = {
    filePath: string;
};

const mardownComponents: Components = {
    h1: (props) => <h1 className="mb-8 text-4xl">{props.children}</h1>,
    h2: (props) => <h2 className="mt-5">{props.children}</h2>,
    p: (props) => <p className="mt-2">{props.children}</p>,
};

export const Markdown = (props: MarkdownProps) => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchContent = async () => {
            const data = await fetch(props.filePath).then((res) => res.text());

            setContent(data);

            setLoading(true);
        };

        fetchContent().catch(console.error);
    }, [props.filePath]);

    if (!content) {
        return null;
    }

    if (loading) {
        <div>LOADING...</div>;
    }

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={mardownComponents}
            className="pb-10 pt-5"
        >
            {content}
        </ReactMarkdown>
    );
};
