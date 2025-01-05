import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Footer = () => {
    return (
        <div>
            <div className="my-12 flex items-center justify-center gap-1.5 text-sm relative">
                <span className="text-muted-foreground">Brought to you by</span>
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger>
                            <span className="flex -space-x-1">
                                <Link
                                    className="group relative size-6 overflow-hidden rounded-full ring-2 ring-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                                    href="https://bento.me/muhammadkaifnazeer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                        src={'https://avatars.githubusercontent.com/u/122388541?v=4'}
                                        alt="Pasquale&lsquo;s profile image"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent className='max-w-sm'>
                            <p>Muhammad Kaif Nazeer</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>
        </div>
    )
}

export default Footer