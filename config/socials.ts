import { IconType } from 'react-icons';
import {
    FaInstagram,
    FaWhatsapp,
} from 'react-icons/fa6';

import { SiLeetcode } from "react-icons/si";

export interface Social {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Social[] = [
      {
        name: 'Leetcode',
        url: 'https://leetcode.com/u/Parikshitsankhyan/',
        icon: SiLeetcode,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/parikshitsankhyan?igsh=MTdxeGFpeWttYTN5Yg==',
        icon: FaInstagram,
    },
  
];

export default socials;
