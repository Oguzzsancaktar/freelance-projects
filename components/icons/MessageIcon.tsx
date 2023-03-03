import React from 'react';
import IIconProps from '@/models/entities/shared/IIconProps';

const MessageIcon: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_299_669)">
        <g filter="url(#filter0_d_299_669)">
          <path d="M22.9998 39.292C35.7037 39.292 45.9998 30.9275 45.9998 20.6045C45.9998 10.2814 35.7037 1.91699 22.9998 1.91699C10.2959 1.91699 -0.000215091 10.2814 -0.000215091 20.6045C-0.000215091 24.6564 1.59002 28.4029 4.28533 31.4666C4.11463 33.6678 3.26111 35.6264 2.36268 37.1178C1.86853 37.9443 1.36541 38.6092 0.997051 39.0584C0.808379 39.283 0.664629 39.4537 0.556816 39.5705C0.50291 39.6244 0.466972 39.6693 0.440019 39.6963L0.413066 39.7232C-0.000215089 40.1365 -0.117012 40.7475 0.107597 41.2865C0.332207 41.8256 0.853301 42.176 1.43728 42.176C4.0158 42.176 6.61229 41.3764 8.76853 40.442C10.826 39.5436 12.5779 38.4744 13.647 37.6928C16.5041 38.726 19.6666 39.301 22.9998 39.301V39.292ZM11.4998 23.4795C9.90955 23.4795 8.62479 22.1947 8.62479 20.6045C8.62479 19.0143 9.90955 17.7295 11.4998 17.7295C13.09 17.7295 14.3748 19.0143 14.3748 20.6045C14.3748 22.1947 13.09 23.4795 11.4998 23.4795ZM22.9998 23.4795C21.4095 23.4795 20.1248 22.1947 20.1248 20.6045C20.1248 19.0143 21.4095 17.7295 22.9998 17.7295C24.59 17.7295 25.8748 19.0143 25.8748 20.6045C25.8748 22.1947 24.59 23.4795 22.9998 23.4795ZM37.3748 20.6045C37.3748 22.1947 36.09 23.4795 34.4998 23.4795C32.9095 23.4795 31.6248 22.1947 31.6248 20.6045C31.6248 19.0143 32.9095 17.7295 34.4998 17.7295C36.09 17.7295 37.3748 19.0143 37.3748 20.6045Z" fill="#F8F8F7" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_299_669" x="-2.00488" y="1.91699" width="50.0049" height="44.2588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_299_669" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_299_669" result="shape" />
        </filter>
        <clipPath id="clip0_299_669">
          <rect width="46" height="46" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default MessageIcon;
