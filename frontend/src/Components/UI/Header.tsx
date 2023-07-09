interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps): JSX.Element {
    return <header><h1 className="text-5xl font-bold pb-[3rem]">{title}</h1></header>;
}
