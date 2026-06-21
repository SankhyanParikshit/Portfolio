import socials from '@/config/socials';
import { FaArrowRight } from 'react-icons/fa6';
import Card from '../ui/card';

export default function Contacto() {
    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2 className='font-calistoga text-2xl max-md:text-center'>
                Liked my work? 👋
            </h2>
            <p className='leading-relaxed max-md:hidden'>
                If my projects or skills resonate with what you’re looking for, I’d love to connect.
                Always open to exciting opportunities and conversations.
            </p>
            <div className='inline-flex flex-col items-center gap-6 lg:flex-row'>
                <a
                    className='cancel-drag group inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-white p-3 px-4 py-2 outline-hidden ring-2 ring-gray-200/45 transition-all duration-300 focus-within:outline-hidden focus-within:ring-4 hover:ring-4 dark:text-black dark:ring-gray-200/30'
                    href='mailto:parikshitsankhyan0024@gmail.com'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    Contact Me
                </a>
                <div className='inline-flex gap-6'>
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className='cancel-drag'
                            aria-label={`Mi ${social.name}`}
                            target='_blank'
                            rel='noreferrer'>
                            {<social.icon size='1.3rem' />}
                        </a>
                    ))}
                </div>
            </div>
        </Card>
    );
}
