import profile from '@/public/images/profile.jpg';
import Image from 'next/image';
import Card from '../ui/card';

export default function Description() {
    return (
        <Card className='flex flex-col  items-center justify-center gap-4 p-8 text-center'>
            <div className='relative size-20 overflow-hidden rounded-full sm:size-22 bg-white'>
                <Image
                    src={profile}
                    alt='ParikshitSankhyan'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    placeholder='blur'
                    priority
                    className="object-cover"
                />
            </div>
            <p className='leading-relaxed'>
                <span className='font-pixelify-sans text-xl'>Parikshit</span>, Software engineering student eager to solve problems through clean code
                <span className='text-gray-500'>
                    <br />
                    $ git commit -m &quot;Build. Learn. Repeat. 🧑‍🔬&quot;
                </span>
            </p>
        </Card>
    );
}
