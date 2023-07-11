interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps): JSX.Element {
    return <header><h1 className="container mx-auto text-5xl font-bold p-[1rem] pt-[2rem] pb-[3rem]">{title}</h1></header>;
}
