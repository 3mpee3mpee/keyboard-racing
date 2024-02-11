export function HeaderLogo(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 7V5a2 2 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 1 2v2" />
            <path d="M21 17v2a2 2 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 1-2-2v-2" />
            <path d="M8 14s1.5 2 4 4-2" />
            <path d="M9 9h.01" />
            <path d="M15 9h.01" />
        </svg>
    )
}