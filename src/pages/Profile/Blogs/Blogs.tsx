// import components
import BlogPowst from '../../../components/BlogPowst/BlogPowst';

export default function BlogsTab() {
  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-4 '>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-3'>
          <BlogPowst sameUser />
          <BlogPowst sameUser />
          <BlogPowst sameUser />
          <BlogPowst sameUser />
          <BlogPowst sameUser />
          <BlogPowst sameUser />
          <BlogPowst sameUser />
          <BlogPowst sameUser />
          <BlogPowst sameUser />
        </div>
      </article>
    </div>
  );
}
