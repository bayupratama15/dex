import React from 'react'

const PoweredByIconLight = ({
  width,
  height,
  color = '#5C6468',
}: {
  width?: number
  height?: number
  color?: string
}) => {
  return (
    <svg width={width || 56} height={height || 30} viewBox="0 0 56 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.853 13.8122C29.7113 13.8932 29.5358 13.9337 29.3334 13.9337C29.2659 13.9337 29.1107 13.9269 28.8543 13.8999V14.6354C29.077 14.6962 29.2997 14.7164 29.5291 14.7164C29.88 14.7164 30.1701 14.6219 30.4063 14.4397C30.6425 14.2576 30.8516 13.9742 31.0271 13.5828L33.0109 9.04834L32.073 9.06184L30.8719 12.0308L29.7045 9.06184H28.7666L30.3928 12.9485L30.2241 13.3331C30.1161 13.5693 29.9879 13.7312 29.853 13.8122Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.0824 13.0633C34.8395 12.9485 34.637 12.7866 34.4886 12.5774H34.4818V13.1375H33.6721V6.92285H34.5426V9.56795C34.8665 9.17658 35.3253 8.9809 35.9124 8.9809L35.8786 8.98765C36.4522 8.98765 36.9313 9.19008 37.3159 9.59494C37.7005 9.9998 37.8894 10.5059 37.8894 11.1132C37.8894 11.7205 37.6937 12.2265 37.3226 12.6314C36.9515 13.043 36.4792 13.2387 35.9056 13.2387C35.602 13.2387 35.3321 13.178 35.0824 13.0633ZM35.7311 9.78373C35.3937 9.78373 35.1036 9.90518 34.8607 10.1346C34.6177 10.364 34.503 10.6947 34.503 11.1333C34.503 11.5719 34.6245 11.9025 34.8674 12.1252C35.1103 12.3478 35.4005 12.4558 35.7379 12.4558H35.7514C36.109 12.4558 36.3856 12.3209 36.6286 12.0712C36.8715 11.8215 36.9862 11.4976 36.9862 11.1063C36.9862 10.7217 36.8715 10.4045 36.6286 10.1548C36.3856 9.90518 36.0887 9.78373 35.7311 9.78373Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.7345 18.7517H26.7278C26.2217 18.7517 25.8168 18.9204 25.5064 19.251V18.8462H24.6967V22.9353H25.5672V20.4926C25.5672 20.216 25.6481 19.9933 25.8236 19.8178C25.999 19.6424 26.2217 19.5547 26.4984 19.5547C26.7615 19.5547 26.9774 19.6492 27.1461 19.8178C27.3148 19.9933 27.3958 20.2227 27.3958 20.5061V22.9353H28.2662V20.3847C28.2662 19.8988 28.1313 19.5075 27.8614 19.2106C27.5915 18.9137 27.2069 18.7517 26.7345 18.7517Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.6695 19.3654C30.0743 18.9538 30.5737 18.7446 31.1607 18.7446C31.7005 18.7446 32.1526 18.9201 32.5035 19.2777C32.8611 19.6353 33.0433 20.0807 33.0433 20.6205C33.0433 20.6205 33.0366 20.9646 32.9623 21.1671H29.9259C29.9799 21.5044 30.1283 21.7743 30.3712 21.9633C30.6141 22.1522 30.911 22.2467 31.2687 22.2467C31.6938 22.2467 32.0919 22.0915 32.4563 21.7676L32.8679 22.3614C32.4023 22.8 31.8625 23.0159 31.2417 23.0159C30.6141 23.0159 30.0878 22.8067 29.6762 22.4019C29.2646 21.997 29.0554 21.4909 29.0554 20.8836C29.0554 20.2831 29.2646 19.777 29.6695 19.3654ZM30.3704 19.7638C30.1545 19.9459 30.0128 20.1889 29.9453 20.4925H32.1585C32.1518 20.1889 32.0506 19.9459 31.8549 19.7638C31.6524 19.5816 31.4095 19.4871 31.1194 19.4871C30.8292 19.4938 30.5863 19.5816 30.3704 19.7638Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.4976 12.5909C42.032 13.0295 41.4922 13.2454 40.8714 13.2454C40.2438 13.2454 39.7175 13.043 39.3059 12.6314C38.8943 12.2265 38.6851 11.7204 38.6851 11.1131C38.6851 10.5126 38.8943 10.0065 39.2992 9.59491C39.704 9.1833 40.2034 8.97412 40.7904 8.97412C41.3302 8.97412 41.7756 9.14956 42.1332 9.50719C42.4908 9.86482 42.673 10.3102 42.673 10.85C42.673 10.85 42.673 11.1806 42.592 11.3965H39.5556C39.6096 11.7339 39.758 12.0038 40.0009 12.1928C40.2438 12.3817 40.5407 12.4762 40.8984 12.4762C41.3235 12.4762 41.7216 12.321 42.086 11.9971L42.4976 12.5909ZM40.7432 9.72328C40.453 9.73003 40.2101 9.81775 39.9942 9.99994C39.7783 10.1821 39.6366 10.4183 39.5691 10.7287H41.7823C41.7756 10.425 41.6744 10.1821 41.4787 9.99994C41.2763 9.81775 41.0333 9.72328 40.7432 9.72328Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.9521 22.22C35.6889 22.22 35.4865 22.1728 35.3583 22.0648C35.2233 21.9569 35.1626 21.7747 35.1626 21.5183V19.6019H36.3705V18.8462H35.1626V17.78H34.2854V18.8462H33.6241V19.6019H34.2854V21.5925C34.2854 22.0648 34.4204 22.4224 34.6835 22.6519C34.9467 22.8813 35.3111 23.0027 35.7834 23.0027C35.9926 23.0027 36.2288 22.969 36.5054 22.9083V22.1728C36.2625 22.1998 36.0938 22.22 35.9656 22.22H35.9521Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.8296 21.471L40.5745 18.7517H40.2776L39.0428 21.5048L37.9699 18.8462H37.0455L38.8539 23.0028H39.1508L40.4261 20.2969L41.7014 23.0028H42.005L43.8067 18.8462H42.8822L41.8296 21.471Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.6758 19.3657C45.0875 18.9609 45.5935 18.7517 46.2008 18.7517C46.7946 18.7585 47.3007 18.9541 47.7123 19.359C48.1374 19.7706 48.3533 20.2767 48.3533 20.8705C48.3533 21.471 48.1509 21.9771 47.7258 22.3887C47.3007 22.8003 46.7946 23.0095 46.2008 23.0095C45.5935 23.0028 45.0875 22.7936 44.6758 22.3887C44.2642 21.9771 44.0551 21.4778 44.0551 20.8772C44.0551 20.2767 44.2642 19.7706 44.6758 19.3657ZM46.1872 22.1861C46.5448 22.1861 46.8417 22.0647 47.0846 21.815C47.3208 21.5653 47.449 21.2482 47.449 20.8703C47.449 20.4925 47.3343 20.1753 47.0914 19.9256C46.8485 19.6827 46.5516 19.5545 46.1939 19.5478H46.1872C45.8228 19.5613 45.5259 19.6827 45.283 19.9324C45.0401 20.1821 44.9254 20.4925 44.9254 20.8771C44.9254 21.2482 45.0401 21.5653 45.283 21.815C45.5259 22.0647 45.8228 22.1861 46.1872 22.1861Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.9669 19.3725V18.8394H49.1572V22.9285H50.0277V20.7423C50.0277 20.3846 50.1424 20.1147 50.3651 19.9123C50.5877 19.7166 50.8711 19.6154 51.2085 19.6154H51.4717V18.8462C51.3772 18.8192 51.2693 18.8057 51.1478 18.8057C50.6552 18.8057 50.2571 18.9946 49.9669 19.3725Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.346 10.9783C44.346 10.6207 44.4607 10.3508 44.6834 10.1484C44.9061 9.95269 45.1895 9.85147 45.5269 9.85147H45.79V9.08223C45.6956 9.05524 45.5876 9.04175 45.4661 9.04175C44.9668 9.04175 44.5687 9.23743 44.2785 9.6153V9.08223H43.4688V13.1646H44.3393V10.9783H44.346Z"
        fill={color}
      />
      <rect x="52.2802" y="16.6938" width="0.870453" height="6.23487" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.2048 20.6343L55.8445 18.8462H54.7716L53.1791 20.6276L54.9538 22.9285H55.9997L54.2048 20.6343Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.2592 9.07544H27.1795L25.5938 10.8636L27.3685 13.1645H28.4143L26.6195 10.8703L28.2592 9.07544Z"
        fill={color}
      />
      <rect x="24.6967" y="6.92944" width="0.870453" height="6.23487" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.93414 14.9187L20.0746 21.3088C20.466 21.5314 20.9518 21.248 20.9518 20.8027V9.02796C20.9518 8.57586 20.466 8.29921 20.0746 8.52188L8.93414 14.9187Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4323 5.77564L12.0233 0.121069C11.6792 -0.142091 11.1866 0.0468443 11.0989 0.465201L8.39307 13.0497L19.3648 6.7473C19.7292 6.53813 19.7629 6.03205 19.4323 5.77564Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0252 29.7167L19.4409 24.0621C19.7715 23.8057 19.7378 23.2996 19.3802 23.0904L8.40167 16.7881L11.1075 29.3725C11.1885 29.7909 11.6878 29.9731 12.0252 29.7167Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.07967 14.9197L8.99468 1.35684C9.10939 0.823771 8.5021 0.439153 8.07024 0.76979L0.607292 6.46484C0.222674 6.75499 0 7.21384 0 7.69292V22.1397C0 22.6188 0.222674 23.0777 0.607292 23.3678L8.07024 29.0629C8.5021 29.3935 9.10939 29.0089 8.99468 28.4758L6.07967 14.9197Z"
        fill={color}
      />
    </svg>
  )
}

export default PoweredByIconLight