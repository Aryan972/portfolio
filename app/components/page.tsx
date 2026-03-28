import { Button } from "@/app-components/ui/button";
import { ArrowUpRight, Box, ChevronRight } from "lucide-react";
import Link from "next/link";
import LineDivider from "@/app-components/line-divider";

const Components = () => {
    const URL = "https://flowui-registry.vercel.app/docs";
    const components = [
        { name: "Auth Button", package: "shadcn", type: "components", link: "auth-buttons"},
        { name: "Lift Button", package: "core", type: "components", link: "lift-button"},
        { name: "Copy Button", package: "shadcn", type: "components", link: "copy-button"},
        { name: "Debounced Input", package: "shadcn", type: "components", link: "debounced-input"},
        { name: "File Select", package: "core", type: "components", link: "file-select"},
        { name: "Scrollbar", package: "core", type: "animated-components", link: "scrollbar"},
        { name: "Changing Text", package: "core", type: "animated-components", link: "changing-text"},
        { name: "Text Divider", package: "core", type: "components", link: "text-divider"}
    ];

    return (
        <div className='container mx-auto min-h-[calc(100vh-80px)] max-w-4xl font-poppins px-6 lg:px-8 pb-20'>
            <div className="flex flex-col pt-5">
                <div className="space-y-1">
                    <h3 className="text-sm text-gray-500">Registry</h3>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                            FlowUI
                            <Link href="https://flowui-registry.vercel.app" target="_blank">
                                <ArrowUpRight className="size-5 text-gray-400 hover:text-blue-500 transition-colors" />
                            </Link>
                        </h1>
                    </div>
                </div>

                <div className="mt-6 space-y-4 max-w-2xl">
                    <p className="text-gray-600 leading-relaxed">
                        Yes, I create reusable UI components. Started with the aim of learning how UI libraries like Shadcn and MagicUI work, which then evolved into personal registry.
                    </p>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        FlowUI is a collection of components aimed to make the development flow easier for the devs.
                    </p>
                </div>

                <LineDivider className="my-8" />

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Box className="size-4" />
                        <span>Some Components</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-dashed border-gray-300 dark:border-gray-800">
                        {components.map((component, index) => (
                            <Link
                                key={index}
                                href={`${URL}/${component.package}/${component.type}/${component.link}`}
                                target="_blank"
                            >
                                <div
                                    className="group flex justify-between items-center p-4 border-r border-b border-dashed border-gray-300 dark:border-gray-800 hover:bg-accent transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="size-2 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors" />
                                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-foreground transition-colors">
                                            {component.name}
                                        </span>
                                    </div>
                                    <ChevronRight className="size-4 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <p className="text-gray-500">To explore more components, with better documentation, click the button below.</p>
                </div>

                <div className="mt-12">
                    <Link href="https://flowui-registry.vercel.app" target="_blank">
                        <Button variant="outline" className="rounded-lg px-6 group">
                            Explore Full Registry
                            <ArrowUpRight className="size-4 mt-0.5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Components;
