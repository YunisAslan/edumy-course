import React from 'react'

import BlogPostInfo from '../../JSONs/blogPost.json'
import CategoryPanel from '../main/CategoryPanel'
import InputBox from '../main/InputBox'
import BlogPostCard from './BlogPostCard'
import RecentPostPanel from './RecentPostPanel'
import TagPanel from './TagPanel'
import ShareLinks from '../main/ShareLinks'

const SingleBlogContainer = () => {
    return (
        <>
            <div className="single-blog-container grid grid-cols-12 pt-24 px-6 text-myBlack">

                <div className="single-blog-container-left xl:col-span-9 mm:col-span-12 xl:pr-6 mm:pr-0">
                    {BlogPostInfo.map(onePost => (
                        onePost.available_post_page &&
                        <BlogPostCard key={onePost.id} {...onePost} />
                    ))}

                    <div className="event-desc pt-0 pr-4 mm:text-center sm:text-left">
                        <h2 className='pb-3 font-[500] text-[1.4rem]'>Bloq</h2>
                        <p className='mm:text-center sm:text-justify'>Dünya daha çox rəqəmsallaşmış bir dövrə doğru dəyişməyə davam etdikcə, onlayn təhsil həm fərdlər, həm də bizneslər üçün getdikcə populyarlaşır. Əslində, bir çox müəssisələr öz işçilərinin bacarıq və biliklərini təkmilləşdirmək yolu kimi onlayn təhsilə müraciət ediblər və nəticədə bütövlükdə şirkət üçün daha böyük uğura gətirib çıxarır.
                        </p>
                        <p className='pt-3 mm:text-center sm:text-justify'>İlkin olaraq, onlayn təhsil öz işçilərinin bacarıqlarını artırmaq istəyən müəssisələr üçün sərfəli həll yoludur.</p>
                    </div>

                    <div className="event-content pt-6">
                        <h2 className='font-[500] pb-3 text-[1.4rem] mm:text-center sm:text-left'>Biznes Müvəffəqiyyəti üçün Onlayn Təhsilin Faydaları</h2>

                        <ul className='list-titles pl-4'>
                            <li>Onlayn öyrənmə məşğul peşəkarlar üçün çevikdir üsuldur. </li>
                            <li>Fərdiləşdirilə bilən öyrənmə təcrübəsi təqdim edilir.</li>
                            <li>Onlayn təhsil müəssisələr üçün sərfəlidir.</li>
                        
                        </ul>
                    </div>

                    <blockquote className='mm:ml-4 sm:ml-10'>
                    "Onlayn təhsil öyrənmə və bilik əldə etməyimizdə inqilab etdi. Rəqəmsal texnologiya və internetin yüksəlişi ilə təhsil dünyası əvvəlkindən daha əlçatan, qənaətcil və çevik oldu. Bizneslər getdikcə daha çox onlayn təhsilə üz tuturlar. işçilərinin bacarıqlarını artırmaq və daha böyük uğur və böyümə əldə etmək üçün bir yoldur."
                    </blockquote>

                    <p className='mm:text-center sm:text-left'>
                    Onlayn təhsilin faydaları yalnız xərc və rahatlıqdanda kənara çıxır. O, həmçinin işçilər üçün daha fərdiləşdirilmiş və cəlbedici öyrənmə təcrübəsi təmin edə bilər ki, bu da motivasiyanın artmasına və saxlanmasına səbəb olur. <br /> <br /> İstər onlayn təhsil platformaları, istər vebinarlar, istərsə də virtual konfranslar vasitəsilə onlayn təhsil müasir sürətlə inkişaf edən və daim inkişaf edən bazarda rəqabətədavamlı qalmaq istəyən bizneslər üçün dəyərli bir vasitə olduğunu sübut etdi.
                    </p>

                    <div className='share-links flex items-center pt-6'>
                        <span className='text-[1.3rem] text-myBlack'>Paylaş: </span>

                        <ShareLinks className="event-share text-black flex items-center space-x-3 text-[1.3rem] pl-3" />
                    </div>
                </div>




                <div className="single-blog-container-right mm:col-span-12 xl:col-span-3 xl:pt-0 mm:pt-10">
                    <InputBox inputBoxHolder="Burada axtar" />
                    <CategoryPanel />
                    <RecentPostPanel />
                    <TagPanel tag1="Yeni" tag2="Sketch" tag3="Biznes" />
                </div>

            </div>
        </>
    )
}

export default SingleBlogContainer