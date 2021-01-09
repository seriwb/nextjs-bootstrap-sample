import { Layout } from "../components/layouts/pricing";
import styled from "styled-components";
import { NextPage } from "next";
import * as application from "../constants/application";

const PricingPage: NextPage = () => {
  return (
    <Layout title={`Pricing example · ${application.TITLE}`}>
      <S_PricingHeader className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">
          Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built
          with default Bootstrap components and utilities with little customization.
        </p>
      </S_PricingHeader>

      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 fw-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 fw-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $15 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 fw-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $29 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;

// ------------ Style settings ------------
const S_PricingHeader = styled.div`
  max-width: 700px;
`;
