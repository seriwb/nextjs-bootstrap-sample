import { Layout } from "../components/layouts/blog";
import styled from "styled-components";
import { NextPage } from "next";

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <S_TopTitle className="display-4 font-italic">Title of a longer featured blog post</S_TopTitle>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most
            interesting in this post’s contents.
          </p>
          <p className="lead mb-0">
            <a href="#" className="text-white fw-bold">
              Continue reading...
            </a>
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">World</strong>
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Design</strong>
              <h3 className="mb-0">Post title</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 font-italic border-bottom">From the Firehose</h3>

          <S_BlogPost>
            <S_BlogPostTitle>Sample blog post</S_BlogPostTitle>
            <S_BlogPostMeta>
              January 1, 2014 by <a href="#">Mark</a>
            </S_BlogPostMeta>

            <p>
              This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic
              typography, images, and code are all supported.
            </p>
            <hr />
            <p>
              Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est
              at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <blockquote>
              <p>
                Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
                leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </blockquote>
            <p>
              Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.
              Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <h2>Heading</h2>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros.
            </p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <pre>
              <code>Example code block</code>
            </pre>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.
            </p>
            <h3>Sub-heading</h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
              bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            <ol>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
              <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
            </ol>
            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
          </S_BlogPost>

          <S_BlogPost>
            <S_BlogPostTitle>Another blog post</S_BlogPostTitle>
            <S_BlogPostMeta>
              December 23, 2013 by <a href="#">Jacob</a>
            </S_BlogPostMeta>

            <p>
              Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est
              at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <blockquote>
              <p>
                Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
                leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </blockquote>
            <p>
              Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.
              Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros.
            </p>
          </S_BlogPost>

          <S_BlogPost>
            <S_BlogPostTitle>New feature</S_BlogPostTitle>
            <S_BlogPostMeta>
              December 14, 2013 by <a href="#">Chris</a>
            </S_BlogPostMeta>

            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
              bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>
              Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.
              Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
          </S_BlogPost>

          <S_Pagination className="blog-pagination" aria-label="Pagination">
            <S_PaginationButton className="btn btn-outline-primary" href="#">
              Older
            </S_PaginationButton>
            <S_PaginationButton
              className="btn btn-outline-secondary disabled"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Newer
            </S_PaginationButton>
          </S_Pagination>
        </div>

        <div className="col-md-4">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">
              Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.
              Aenean lacinia bibendum nulla sed consectetur.
            </p>
          </div>

          <div className="p-4">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li>
            </ol>
          </div>

          <div className="p-4">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

// ------------ Style settings ------------
const S_TopTitle = styled.h1`
  font-size: 2.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
`;

const S_BlogPost = styled.article`
  margin-bottom: 4rem;
`;

const S_BlogPostTitle = styled.h2`
  margin-bottom: 0.25rem;
  font-size: 2.5rem;
`;

const S_BlogPostMeta = styled.p`
  margin-bottom: 1.25rem;
  color: #727272;
`;

const S_Pagination = styled.nav`
  margin-bottom: 4rem;
`;

const S_PaginationButton = styled.a`
  border-radius: 2rem;
  margin-right: 4px;
`;
