import React from "react";
import { Footer } from "../footer/Footer";
import pdf from "./Home Alone.pdf";
import imglogo from "./about.jpg";
// import { useTranslation } from "react-i18next";
export const Documentation = () => {
    // const { t } = useTranslation();
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          *,*::before,*::after{
            box-sizing:border-box 
       }
        @media (prefers-reduced-motion: no-preference){
            :root{
                scroll-behavior:smooth 
           }
       }
        body{
            margin:0;
            font-family:"Open Sans",sans-serif;
            font-size:1rem;
            font-weight:400;
            line-height:1.5;
            color:#6B6A75;
            background-color:#fff;
            -webkit-text-size-adjust:100%;
            -webkit-tap-highlight-color:rgba(0,0,0,0) 
       }
        h1,h4,h5{
            margin-top:0;
            margin-bottom:.5rem;
            font-family:"Jost",sans-serif;
            font-weight:500;
            line-height:1.2;
            color:#120F2D 
       }
        h1{
            font-size:calc(1.375rem + 1.5vw) 
       }
        @media (min-width: 1200px){
            h1{
                font-size:2.5rem 
           }
       }
        h4{
            font-size:calc(1.275rem + .3vw) 
       }
        @media (min-width: 1200px){
            h4{
                font-size:1.5rem 
           }
       }
        h5{
            font-size:1.25rem 
       }
        p{
            margin-top:0;
            margin-bottom:1rem 
       }
        img{
            vertical-align:middle 
       }
        button:focus:not(:focus-visible){
            outline:0 
       }
        button:not(:disabled),[type="button"]:not(:disabled),[type="reset"]:not(:disabled),[type="submit"]:not(:disabled){
            cursor:pointer 
       }
        ::-moz-focus-inner{
            padding:0;
            border-style:none 
       }
        ::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{
            padding:0 
       }
        ::-webkit-inner-spin-button{
            height:auto 
       }
        ::-webkit-search-decoration{
            -webkit-appearance:none 
       }
        ::-webkit-color-swatch-wrapper{
            padding:0 
       }
        ::file-selector-button{
            font:inherit 
       }
        ::-webkit-file-upload-button{
            font:inherit;
            -webkit-appearance:button 
       }
        .display-5{
            font-size:calc(1.425rem + 2.1vw);
            font-weight:700;
            line-height:1.2 
       }
        @media (min-width: 1200px){
            .display-5{
                font-size:3rem 
           }
       }
        .container,.container-fluid{
            width:100%;
            padding-right:var(--bs-gutter-x, .75rem);
            padding-left:var(--bs-gutter-x, .75rem);
            margin-right:auto;
            margin-left:auto 
       }
        @media (min-width: 576px){
            .container{
                max-width:540px 
           }
       }
        @media (min-width: 768px){
            .container{
                max-width:720px 
           }
       }
        @media (min-width: 992px){
            .container{
                max-width:960px 
           }
       }
        @media (min-width: 1200px){
            .container{
                max-width:1140px 
           }
       }
        @media (min-width: 1400px){
            .container{
                max-width:1320px 
           }
       }
        .row{
            --bs-gutter-x: 1.5rem;
            --bs-gutter-y: 0;
            display:flex;
            flex-wrap:wrap;
            margin-top:calc(var(--bs-gutter-y) * -1);
            margin-right:calc(var(--bs-gutter-x) / -2);
            margin-left:calc(var(--bs-gutter-x) / -2) 
       }
        .row>*{
            flex-shrink:0;
            width:100%;
            max-width:100%;
            padding-right:calc(var(--bs-gutter-x) / 2);
            padding-left:calc(var(--bs-gutter-x) / 2);
            margin-top:var(--bs-gutter-y) 
       }
        .g-3{
            --bs-gutter-x: 1rem 
       }
        .g-3{
            --bs-gutter-y: 1rem 
       }
        .gx-5{
            --bs-gutter-x: 3rem 
       }
        @media (min-width: 576px){
            .col-sm-6{
                flex:0 0 auto;
                width:50% 
           }
       }
        @media (min-width: 992px){
            .col-lg-5{
                flex:0 0 auto;
                width:41.66667% 
           }
            .col-lg-7{
                flex:0 0 auto;
                width:58.33333% 
           }
       }
        .form-control[type="file"]:not(:disabled):not(:read-only){
            cursor:pointer 
       }
        .form-control::file-selector-button{
            padding:.375rem .75rem;
            margin:-.375rem -.75rem;
            margin-inline-end:.75rem;
            color:#6B6A75;
            background-color:#e9ecef;
            pointer-events:none;
            border-color:inherit;
            border-style:solid;
            border-width:0;
            border-inline-end-width:1px;
            border-radius:0;
            transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out 
       }
        @media (prefers-reduced-motion: reduce){
            .form-control::file-selector-button{
                transition:none 
           }
       }
        .form-control:hover:not(:disabled):not(:read-only)::file-selector-button{
            background-color:#dde0e3 
       }
        .form-control:hover:not(:disabled):not(:read-only)::-webkit-file-upload-button{
            background-color:#dde0e3 
       }
        .form-control-sm::file-selector-button{
            padding:.25rem .5rem;
            margin:-.25rem -.5rem;
            margin-inline-end:.5rem 
       }
        .form-control-lg::file-selector-button{
            padding:.5rem 1rem;
            margin:-.5rem -1rem;
            margin-inline-end:1rem 
       }
        .form-control-color:not(:disabled):not(:read-only){
            cursor:pointer 
       }
        .visually-hidden-focusable:not(:focus):not(:focus-within){
            position:absolute !important;
            width:1px !important;
            height:1px !important;
            padding:0 !important;
            margin:-1px !important;
            overflow:hidden !important;
            clip:rect(0, 0, 0, 0) !important;
            white-space:nowrap !important;
            border:0 !important 
       }
        .d-flex{
            display:flex !important 
       }
        .position-relative{
            position:relative !important 
       }
        .position-absolute{
            position:absolute !important 
       }
        .border-bottom{
            border-bottom:1px solid #dee2e6 !important 
       }

        .border-5{
            border-width:5px !important 
       }
        .w-100{
            width:100% !important 
       }
        .h-100{
            height:100% !important 
       }
        .flex-column{
            flex-direction:column !important 
       }
        .justify-content-center{
            justify-content:center !important 
       }
        .mb-0{
            margin-bottom:0 !important 
       }
        .mb-4{
            margin-bottom:1.5rem !important 
       }
        .mb-5{
            margin-bottom:3rem !important 
       }
        .p-3{
            padding:1rem !important 
       }
        .py-5{
            padding-top:3rem !important;
            padding-bottom:3rem !important 
       }
        .text-center{
            text-align:center !important 
       }
        .text-uppercase{
            text-transform:uppercase !important 
       }
        .text-primary{
            color:#2878EB !important 
       }
        .text-white{
            color:#fff !important 
       }
        .bg-primary{
            background-color:#124921 !important 
       }
        .bg-secondary{
            background-color:#009174 !important 
       }
        .rounded{
            border-radius:2px !important 
       }
        @media (min-width: 992px){
            .mb-lg-0{
                margin-bottom:0 !important 
           }
       }
            `,
        }}
      />

<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'500px'}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" alt="Logo" data-wow-delay="0.3s" src={imglogo} style={{objectFit:'cover', left:'0', right:'0'}} />
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="mb-4">
                        <h5 class="text-primary text-uppercase" style={{letterSpacing:'5px'}}>Product List</h5>
                        <h1 class="display-5 mb-0">DOCUMENTATION                        </h1>
                    </div>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet et magna</p>
                    <div class="row g-3">
                    <div class="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <a href={pdf} download="Home Alone Product List.pdf" target="_blank" rel="noreferrer"><div class="bg-primary d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3" style={{height:'200px'}}>
                                <i class="fa fa-star fa-4x text-white mb-4"></i>
                                <h4 class="text-white mb-0">Download</h4>
                            </div>
                            </a> </div>
                        
                       <div class="col-sm-6 wow zoomIn" data-wow-delay="0.9s">
                       <a href='./Openfile' target="_blank" rel="noreferrer"> <div class="bg-secondary d-flex flex-column justify-content-center text-center border-bottom border-5 border-primary rounded p-3" style={{height:'200px'}}>
                                <i class="fa fa-award fa-4x text-white mb-4"></i>
                                <h4 class="text-white mb-0">Watch Online</h4>
                            </div></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Footer />
    </>
  );
};
