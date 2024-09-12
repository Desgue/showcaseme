import dynamic from 'next/dynamic'
import { IconProps } from '~/lib/types/socials';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = dynamic(dynamicIconImports[name])

    return <LucideIcon { ...props } />;
};

export default Icon;
