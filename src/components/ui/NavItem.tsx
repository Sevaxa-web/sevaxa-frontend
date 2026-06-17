type NavItemProps = {
  title: string;
  link: string;
};

export default function NavItem({ title, link }: NavItemProps) {
  return (
    <li style={{listStyleType: 'none', border: '1px solid black', padding: '8px 15px'}}>
      <a href={link} style={{textDecoration: 'none'}}>{title}</a>
    </li>
  );
}
