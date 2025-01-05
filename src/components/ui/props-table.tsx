import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from 'lucide-react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface PropDefinition {
    name: string
    type: string
    defaultValue?: string
    description: string
}

interface PropsTableProps {
    props: PropDefinition[]
}

export function PropsTable({ props }: PropsTableProps) {
    return (
        <>
            <ScrollArea>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Prop</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Default</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.map((prop) => (
                            <TableRow key={prop.name}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        {prop.name}
                                        <TooltipProvider delayDuration={0}>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Info className="h-4 w-4 text-muted-foreground" />
                                                </TooltipTrigger>
                                                <TooltipContent className='max-w-sm'>
                                                    <p>{prop.description}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </TableCell>
                                <TableCell>{prop.type}</TableCell>
                                <TableCell>{prop.defaultValue || '-'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    )
}

