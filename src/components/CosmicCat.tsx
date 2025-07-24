"use client"
import CatHeadSVG from "@/components/cat";


export default function CosmicCat({
                                    wisdom,
                                    isTalking,
                                  }: {
  wisdom: string
  isTalking: boolean
}) {

  return (
      <div className="flex flex-col items-center">
        <CatHeadSVG isTalking={isTalking} />
        {/* Speech bubble */}
        <div className="relative mt-4 flex justify-center">
          <div className="bg-white/90 border-2 border-tie-dye-purple rounded-2xl px-6 py-4 text-lg font-semibold text-tie-dye-purple shadow-lg max-w-xs text-center relative z-10">
            <span className={"text-black"}>{wisdom}</span>
          </div>
        </div>
      </div>
  )
}
