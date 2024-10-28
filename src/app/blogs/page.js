import BlogsContainer from '@/components/BlogsPage/BlogsContainer'
import BlogsHero from '@/components/BlogsPage/BlogsHero'
import React from 'react'

export const metadata = {
    title: "News&Updates",
    description: "Takhleeq excels in digital marketing with data-driven strategies, crafts intuitive high-performance websites in web development, and specializes in creating visually captivating UI/UX designs for enhanced user satisfaction. Our branding solutions deliver visually striking graphics that effectively communicate brand stories and leave a lasting impression on audiences.",
};

function Blogs() {
    return (
        <div>
            <BlogsHero />
            <BlogsContainer />
        </div>
    )
}

export default Blogs