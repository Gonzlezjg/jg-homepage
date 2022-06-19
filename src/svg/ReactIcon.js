const ReactIcon = ({ size = 30 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 480 480"
    >
      <linearGradient
        xmlns="http://www.w3.org/2000/svg"
        id="a"
        x1="212.205"
        x2="212.205"
        y1="476.432"
        y2="-26.208"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#006df0"></stop>
        <stop offset="1" stopColor="#00e7f0"></stop>
      </linearGradient>
      <g xmlns="http://www.w3.org/2000/svg" fill="url(#a)">
        <path d="M212.203 200c-22.09 0-40 17.91-40 40s17.91 40 40 40c22.094 0 40-17.91 40-40-.023-22.082-17.918-39.973-40-40zm0 64c-13.254 0-24-10.746-24-24s10.746-24 24-24c13.258 0 24 10.746 24 24s-10.742 24-24 24zm0 0"></path>
        <path d="M351.406 240a409.299 409.299 0 0034.223-32.496c34.215-37.008 46.129-67.274 34.45-87.504-16.802-29.063-73.235-23.672-138.243-.566C269.316 51.586 245.758 0 212.203 0c-33.55 0-57.11 51.586-69.598 119.441C77.598 96.336 21.141 90.945 4.363 120c-11.68 20.23.235 50.496 34.45 87.504A410.152 410.152 0 0073.002 240a409.3 409.3 0 00-34.222 32.496C4.59 309.504-7.324 339.77 4.355 360c8 13.871 25.051 19.895 47.754 19.895a287.492 287.492 0 0090.496-19.344C155.094 428.414 178.652 480 212.203 480c33.555 0 57.113-51.586 69.602-119.441a287.675 287.675 0 0090.488 19.336c22.695 0 39.742-6.032 47.754-19.895 11.68-20.23-.235-50.496-34.45-87.504A410.152 410.152 0 00351.408 240zm54.817-112c7.488 12.977-4.602 38.64-32.336 68.64a400.857 400.857 0 01-34.961 32.993c-14.77-11.88-30.856-23.656-48.121-35.067-1.254-20.254-3.36-40.207-6.274-59.199 64.473-23.144 111.48-24.969 121.664-7.367zm-162.02 167.426c-10.848 6.25-21.512 12.066-32 17.453-10.473-5.375-21.14-11.195-32-17.453-10.71-6.188-21.047-12.594-31.117-19.09-.586-11.727-.883-23.84-.883-36.336s.297-24.61.883-36.336c10.07-6.496 20.406-12.902 31.117-19.09 10.84-6.254 21.508-12.07 32-17.445a759.655 759.655 0 0132 17.445c10.715 6.188 21.05 12.594 31.121 19.09.586 11.727.88 23.84.88 36.336s-.294 24.61-.88 36.336c-10.07 6.496-20.406 12.902-31.12 19.09zm29.867.71c-1.168 15.048-2.785 29.329-4.8 42.743-12.625-4.984-25.81-10.727-39.434-17.246 7.52-4 14.992-8.106 22.344-12.344a758.155 758.155 0 0021.89-13.152zm-79.52 25.466c-13.6 6.511-26.808 12.261-39.433 17.246-1.992-13.414-3.61-27.696-4.8-42.743a847.357 847.357 0 0021.863 13.153c7.379 4.27 14.847 8.344 22.37 12.344zm-61.89-56.22c-12.176-8.335-23.672-16.796-34.496-25.382 10.797-8.57 22.293-17.043 34.496-25.414-.289 8.476-.457 16.965-.457 25.414s.168 16.938.457 25.414zm17.68-81.55c1.168-15.039 2.785-29.312 4.8-42.719 12.61 4.977 25.778 10.727 39.383 17.23a743.696 743.696 0 00-22.293 12.337 744.422 744.422 0 00-21.89 13.183zm79.539-25.434c13.598-6.511 26.797-12.253 39.414-17.238 1.992 13.414 3.61 27.695 4.8 42.742a767.739 767.739 0 00-21.89-13.191c-7.344-4.238-14.805-8.313-22.324-12.313zm61.871 56.227c12.176 8.328 23.672 16.79 34.496 25.375-10.797 8.566-22.293 17.04-34.496 25.414.285-8.476.453-16.965.453-25.414s-.168-16.938-.453-25.414zM212.203 16c20.363 0 42.274 41.656 54.442 109.078-17.903 6.969-36.247 15.129-54.399 24.18-18.191-9.051-36.547-17.211-54.402-24.18C169.934 57.664 191.844 16 212.204 16zM50.551 196.64c-27.738-30-39.824-55.663-32.336-68.64 4.52-7.824 16.277-11.816 33.598-11.816a279.493 279.493 0 0188.09 19.199c-2.915 18.96-5.016 38.906-6.274 59.152-17.266 11.41-33.352 23.2-48.121 35.067A400.452 400.452 0 0150.55 196.64zM18.215 352c-7.488-12.977 4.598-38.64 32.336-68.64a400.253 400.253 0 0134.957-32.993c14.77 11.88 30.855 23.656 48.12 35.067 1.259 20.253 3.36 40.207 6.274 59.199C75.406 367.777 28.398 369.602 18.215 352zm193.988 112c-20.36 0-42.262-41.656-54.398-109.07 17.894-6.97 36.25-15.13 54.441-24.176 18.192 9.047 36.543 17.207 54.438 24.176C254.469 422.344 232.566 464 212.204 464zm193.992-112c-10.175 17.602-57.215 15.777-121.687-7.39 2.914-18.97 5.015-38.923 6.273-59.204 17.266-11.406 33.352-23.199 48.121-35.062a399.664 399.664 0 0134.957 32.992c27.739 30.023 39.825 55.687 32.336 68.664zm0 0"></path>
      </g>
    </svg>
  )
}

export default ReactIcon
