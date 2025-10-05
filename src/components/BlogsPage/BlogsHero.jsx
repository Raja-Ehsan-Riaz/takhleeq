import Image from "next/image"
const BlogsHero = () => {
	return (
		<div className="flex h-[70vh] relative overflow-hidden bg-gray-900/70 p-2 ">
			<Image
				fill={true}
				style={{ objectFit: "cover" }}
				src="/Images/Heros/blogs.jpg"
				className=" absolute -z-10"
				priority
			/>
			<h1 className="text-white pop text-center mx-auto text-4xl md:text-5xl uppercase font-bold  my-auto">
				News & Blogs
			</h1>
		</div>
	)
}

export default BlogsHero
