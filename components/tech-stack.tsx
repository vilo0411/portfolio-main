"use client"

import { useMemo } from "react"
import {
    siGoogleanalytics,
    siN8n,
    siNotion,
    siGoogletagmanager,
} from "simple-icons/icons"

type TechItem = {
    name: string
    icon?: any
    customIcon?: string
    color: string
}

// Custom SVG paths for tools not in simple-icons
const customIcons = {
    ahrefs: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.496 17.333H8.504L6.17 12l2.334-5.333h6.992L17.83 12l-2.334 5.333z",
    semrush: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 13.5h-4v4h-3v-4h-4v-3h4v-4h3v4h4v3z",
    gsc: "M22.956 11.837l-2.388-4.137a1.091 1.091 0 00-.943-.545H4.375c-.388 0-.747.207-.943.545L1.044 11.837a1.09 1.09 0 000 1.09l2.388 4.136c.196.338.555.546.943.546h15.25c.388 0 .747-.208.943-.546l2.388-4.136a1.09 1.09 0 000-1.09zM12 15.545a3.163 3.163 0 01-3.163-3.163A3.163 3.163 0 0112 9.219a3.163 3.163 0 013.163 3.163A3.163 3.163 0 0112 15.545z",
    hubspot: "M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984 2.209 2.209 0 00-2.209-2.209 2.209 2.209 0 00-2.209 2.209c0 .859.493 1.6 1.211 1.963v2.868a5.93 5.93 0 00-2.876 1.382L5.369 3.143a2.476 2.476 0 00.085-.634A2.51 2.51 0 002.945 0 2.51 2.51 0 00.436 2.509a2.51 2.51 0 002.509 2.509c.428 0 .832-.108 1.185-.298l7.829 6.093a5.93 5.93 0 00-.354 2.004c0 .714.126 1.399.357 2.033l-2.079 1.455a2.027 2.027 0 00-1.272-.449 2.04 2.04 0 00-2.039 2.039 2.04 2.04 0 002.039 2.039 2.04 2.04 0 002.039-2.039c0-.186-.025-.366-.072-.538l2.004-1.402a5.93 5.93 0 009.508-4.143 5.93 5.93 0 00-4.926-5.882zm-.942 8.938a3.06 3.06 0 01-3.057-3.057 3.06 3.06 0 013.057-3.057 3.06 3.06 0 013.057 3.057 3.06 3.06 0 01-3.057 3.057z",
    screamingfrog: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
}

export default function TechStack() {
    const techs: TechItem[] = useMemo(() => [
        { name: "Ahrefs", customIcon: customIcons.ahrefs, color: "#FF6A3D" },
        { name: "SEMrush", customIcon: customIcons.semrush, color: "#FF642D" },
        { name: "GSC", customIcon: customIcons.gsc, color: "#458CF5" },
        { name: "GA4", icon: siGoogleanalytics, color: "#E37400" },
        { name: "GTM", icon: siGoogletagmanager, color: "#246FDB" },
        { name: "n8n", icon: siN8n, color: "#EA4B71" },
        { name: "HubSpot", customIcon: customIcons.hubspot, color: "#FF7A59" },
        { name: "Notion", icon: siNotion, color: "#000000" },
    ], [])

    return (
        <div className="w-full py-6 select-none bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-white/[0.03] dark:to-white/[0.01] rounded-xl border border-neutral-200/50 dark:border-white/5">
            <p className="text-xs font-semibold text-center mb-5 text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                Tools & Platforms
            </p>

            <div className="relative flex overflow-x-hidden group">
                {/* First marquee */}
                <div className="animate-marquee flex gap-10 whitespace-nowrap py-2 px-6">
                    {techs.concat(techs).map((tech, idx) => (
                        <div
                            key={`${tech.name}-${idx}`}
                            className="flex flex-col items-center gap-2.5 group/icon min-w-[56px]"
                        >
                            <div
                                className="w-9 h-9 p-1.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:shadow-lg group-hover/icon:border-[var(--hover-color)]/30"
                                style={{ "--hover-color": tech.color } as any}
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full fill-current text-neutral-500 dark:text-neutral-400 group-hover/icon:text-[var(--hover-color)] transition-colors duration-300"
                                    style={{ "--hover-color": tech.color } as any}
                                >
                                    <path d={tech.icon?.path || tech.customIcon} />
                                </svg>
                            </div>
                            <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 group-hover/icon:text-neutral-700 dark:group-hover/icon:text-neutral-300 transition-all duration-300">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Second marquee for seamless loop */}
                <div className="absolute top-0 animate-marquee2 flex gap-10 whitespace-nowrap py-2 px-6">
                    {techs.concat(techs).map((tech, idx) => (
                        <div
                            key={`${tech.name}-duplicate-${idx}`}
                            className="flex flex-col items-center gap-2.5 group/icon min-w-[56px]"
                        >
                            <div
                                className="w-9 h-9 p-1.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:shadow-lg group-hover/icon:border-[var(--hover-color)]/30"
                                style={{ "--hover-color": tech.color } as any}
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full fill-current text-neutral-500 dark:text-neutral-400 group-hover/icon:text-[var(--hover-color)] transition-colors duration-300"
                                    style={{ "--hover-color": tech.color } as any}
                                >
                                    <path d={tech.icon?.path || tech.customIcon} />
                                </svg>
                            </div>
                            <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 group-hover/icon:text-neutral-700 dark:group-hover/icon:text-neutral-300 transition-all duration-300">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
