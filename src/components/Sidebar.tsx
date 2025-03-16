"use client"
import React from 'react'
import ModeToggle from './ToggleTheme'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from './ui/sidebar'
import { Calendar, Home, Search, Settings, SquarePlus } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}
const items = [
    {
        title: "Home",
        url: "/home",
        icon: Home,
    },

    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Create",
        url: "/addPost",
        icon: SquarePlus,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]
const Sidebars = (props: Props) => {
    return (
        <SidebarProvider>

            <Sidebar>
                <SidebarHeader>
                    Logo <ModeToggle />
                    <Button variant="secondary" onClick={() => alert("Hello")}>Hello </Button>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon width='20px' height='24px' />
                                            <span className='text-lg'>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    Footer
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    )
}

export default Sidebars

{/* <ModeToggle /> */ }