import BlogPowst from '../../../components/BlogPowst/BlogPowst';
import EditBlogModal from '../../../components/modals/EditBlogModal/EditBlogModal';
import { useGetAllUserBlogs } from '../../../queries/getAllUserBlogs/useGetAllUserBlogs.hook';

import BlogsSkeleton from './BlogsSkeleton';

export default function BlogsTab({ username }: { username: string }) {
  const { data: userBlogs, isPending: isUserBlogsPending } = useGetAllUserBlogs(
    { userId: username }
  );

  if (isUserBlogsPending) {
    return <BlogsSkeleton />;
  }

  return (
    <div
      role='tabpanel'
      className='tab-content bg-base-100 rounded-box py-4'
    >
      <article className='flex flex-col gap-4 '>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {userBlogs?.map((blog) => (
            <BlogPowst
              key={blog.blog?._id}
              blogDetails={blog.blog}
              sameUser
            />
          ))}

          <EditBlogModal />
        </div>
      </article>
    </div>
  );
}
