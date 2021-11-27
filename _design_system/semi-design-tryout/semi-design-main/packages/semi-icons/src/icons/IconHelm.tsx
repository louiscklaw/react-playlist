import * as React from 'react';
import { convertIcon } from '../components/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 11.8406V11.8281C23 11.3469 22.5517 10.9344 21.9655 10.9344H20.8621C20.6897 9.28438 20.0345 7.7375 19 6.43125L19.7586 5.675C19.9655 5.50312 20.069 5.2625 20.1034 5.02188C20.1294 4.84065 20.0771 4.63992 19.9761 4.47843C19.9534 4.42331 19.9205 4.37309 19.8774 4.33011L19.6645 4.11755C19.6282 4.08132 19.5858 4.05229 19.539 4.03047C19.3809 3.91932 19.184 3.86027 18.9655 3.8875C18.7241 3.92188 18.4828 4.05938 18.3103 4.23125L17.5517 4.9875C16.2414 3.95625 14.6897 3.3375 13.0345 3.13125V2.03125C13.0345 1.45431 12.6312 1.0114 12.1563 1.00022C12.1515 1.00007 12.1467 1 12.1419 1H12.1379H11.8621H11.8581C11.8533 1 11.8485 1.00007 11.8437 1.00022C11.3688 1.0114 10.9655 1.45431 10.9655 2.03125V3.19131C9.26627 3.38259 7.71772 4.07507 6.44771 5.09006L5.68966 4.33437C5.48276 4.12812 5.2069 3.99062 4.93103 3.99062C4.89818 3.99062 4.86445 3.99323 4.8304 3.99815C4.64266 3.95429 4.45914 3.99409 4.33548 4.11755L4.12258 4.33011C4.04911 4.40347 4.00521 4.50214 3.99091 4.61011C3.92496 4.72715 3.89655 4.86743 3.89655 5.02188C3.89655 5.29688 4.03448 5.57188 4.24138 5.77813L5 6.53438C3.96552 7.84063 3.34483 9.3875 3.13793 11.0375H2.03448C1.61357 11.0375 1.26377 11.2502 1.09997 11.5483C1.03653 11.633 1 11.7328 1 11.8406V11.9313V12.124V12.2063C1 12.6875 1.44828 13.1 2.03448 13.1H3.13793C3.31034 14.75 3.96552 16.2969 5 17.6031L4.24138 18.3594C4.03448 18.5656 3.89655 18.8406 3.89655 19.1156C3.89655 19.2126 3.91944 19.3173 3.95804 19.4152C3.97463 19.5124 4.01765 19.6006 4.0871 19.6699L4.3 19.8824C4.37305 19.9554 4.47115 19.9991 4.57856 20.0137C4.69762 20.0828 4.84136 20.1125 5 20.1125C5.27586 20.1125 5.55172 19.975 5.75862 19.7687L6.51724 19.0125C7.82759 20.0438 9.37931 20.6625 11.0345 20.8688V21.9688C11.0345 22.359 11.219 22.6879 11.4854 22.8634C11.579 22.9492 11.6951 23 11.8226 23H11.931H12.1065H12.2069C12.6897 23 13.1034 22.5531 13.1034 21.9688V20.8688C14.7586 20.6969 16.3103 20.0438 17.6207 19.0125L18.3103 19.7344C18.4828 19.9406 18.7241 20.0438 18.9655 20.0781C19.1134 20.0992 19.2743 20.0686 19.4163 20.0022C19.4969 19.9815 19.5698 19.9416 19.629 19.8824L19.8419 19.6699C19.8634 19.6485 19.8823 19.6249 19.8988 19.5995C20.0443 19.4629 20.1034 19.2696 20.1034 19.0469C20.1034 18.7719 19.9655 18.4969 19.7586 18.2906L19 17.5344C20.0345 16.2281 20.6552 14.6812 20.8621 13.0312H21.9655C22.5517 13.0312 23 12.6187 23 12.1375V12.124V11.8406ZM13.1034 18.1187V14.5781C13.1034 14.5438 13.1034 14.5437 13.1379 14.5437L15.6552 17.0531C14.8966 17.6031 14.0345 17.9813 13.1034 18.1187ZM11 18.1187C10.069 17.9469 9.2069 17.6031 8.44828 17.0531L10.9655 14.5781H11V18.1187ZM17.1034 15.6094L14.5862 13.1C14.5862 13.0656 14.6207 13.0656 14.6207 13.0656H18.1724C18 13.9594 17.6552 14.8531 17.1034 15.6094ZM7 15.575C6.44828 14.8188 6.06897 13.9594 5.93103 13.0312H9.48276C9.51724 13.0312 9.51724 13.0656 9.51724 13.0656L7 15.575ZM18.1724 10.9688H14.6207C14.6207 10.9688 14.5862 10.9688 14.5862 10.9344L17.1034 8.425C17.6552 9.18125 18.0345 10.0406 18.1724 10.9688ZM9.48276 10.9688H5.93103C6.10345 10.075 6.44828 9.18125 7 8.425L9.51724 10.9344C9.48276 10.9344 9.48276 10.9688 9.48276 10.9688ZM10.9655 9.49063L8.44828 6.98125C9.24138 6.43125 10.1034 6.05313 11 5.91563V9.45625C11 9.49063 10.9655 9.49063 10.9655 9.49063ZM13.1379 9.49063C13.1379 9.45625 13.1034 9.45625 13.1034 9.45625V5.91563C14 6.0875 14.8966 6.43125 15.6552 6.98125L13.1379 9.49063Z"
                fill="currentColor"
            />
        </svg>
    );
}

const IconComponent = convertIcon(SvgComponent, 'helm');
export default IconComponent;
