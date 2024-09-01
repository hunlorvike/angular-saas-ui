## Run for dev environment

Run command `ng serve` to start the development server. Access http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Build for dev environment

Run command `ng build` to build the project. The build artifacts will be stored in the `dist/`.

## Build for production environment

Run command `ng build --configuration production` to build the project for production. The build artifacts will be stored in the `dist/`.

## Run for production environment

Run command `ng serve --configuration production` to run the production build.

## Run for test environment

Run command `ng test` to run unit tests via [Karma](https://karma-runner.github.io).

## Run for end-to-end test

Run command `ng e2e` to run end-to-end tests via [Protractor](http://www.protractortest.org/).

## Script generate

Run command `ng generate component tên-component` to create a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Format code

Run command `npm run format` to format your code by prettier.

## Check code

Run command `ng lint` to check your code.

## Fix code

Run command `ng lint --fix` to fix your code.

## Analyze bundle

Run command `npm run analyze` to analyze the size of the bundle of the application.

## Render server

Run command `npm run serve:ssr:daiminhvietnam` to run the application render server.

## Help

To get more help on the Angular CLI, use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

## Project structure

/src/app
│
├── core/
│ ├── services/ # Các dịch vụ chung (ví dụ: service API, service data)
│ ├── guards/ # Các guard bảo vệ route
│ ├── interceptors/ # Các interceptor HTTP
│ └── models/ # Các mô hình dữ liệu (interfaces, types)
│
├── common/
│ ├── components/ # Các component dùng chung trong nhiều tính năng
│ ├── directives/ # Các directive dùng chung
│ ├── pipes/ # Các pipe dùng chung
│ └── state/ # Quản lý trạng thái dùng chung (actions, effects, reducers, selectors)
│
├── modules/
│ ├── home/ # Module trang chủ
│ │ ├── components/ # Các component của trang chủ
│ │ ├── services/ # Các dịch vụ riêng cho trang chủ
│ │ ├── home.module.ts
│ │ └── home-routing.module.ts
│ │
│ └── about/ # Module giới thiệu
│ ├── components/ # Các component của trang giới thiệu
│ ├── services/ # Các dịch vụ riêng cho trang giới thiệu
│ ├── about.module.ts
│ └── about-routing.module.ts
│
├── partials/
│ ├── header/ # Component header
│ │ ├── header.component.ts
│ │ └── header.component.html
│ └── footer/ # Component footer
│ ├── footer.component.ts
│ └── footer.component.html
│
├── app.routes.ts # Cấu hình routing chính
├── app.component.ts # Component stand-alone gốc của ứng dụng
├── app.config.ts # Cấu hình ứng dụng
└── app.config.server.ts # Cấu hình ứng dụng server-side

## Giải thích

### Core

-   **`services/`**: Chứa các dịch vụ chung được sử dụng trong toàn bộ ứng dụng. Ví dụ như dịch vụ xác thực, dịch vụ gọi API, dịch vụ quản lý dữ liệu chung.
-   **`guards/`**: Chứa các guard để bảo vệ các route. Ví dụ như AuthGuard để kiểm tra xác thực trước khi cho phép truy cập vào các trang yêu cầu đăng nhập.
-   **`interceptors/`**: Chứa các interceptor HTTP để xử lý các yêu cầu và phản hồi HTTP. Ví dụ như thêm token xác thực vào header của mỗi request.
-   **`models/`**: Chứa các interface và type TypeScript được sử dụng trong ứng dụng. Định nghĩa cấu trúc dữ liệu cho các đối tượng trong ứng dụng.

### Common

-   **`components/`**: Chứa các component có thể tái sử dụng trong nhiều tính năng khác nhau. Ví dụ như button, input, modal, v.v.
-   **`directives/`**: Chứa các directive có thể tái sử dụng. Ví dụ như directive highlight text, directive lazy loading image.
-   **`pipes/`**: Chứa các pipe có thể tái sử dụng. Ví dụ như pipe định dạng ngày tháng, pipe chuyển đổi đơn vị tiền tệ.
-   **`state/`**: Chứa các file quản lý trạng thái được chia sẻ giữa nhiều tính năng. Sử dụng NgRx để quản lý state toàn cục của ứng dụng.

### Modules

-   **`home/`**: Chứa module cho trang chủ.
    -   **`components/`**: Các component cụ thể cho trang chủ. Ví dụ như banner, danh sách sản phẩm nổi bật.
    -   **`services/`**: Các dịch vụ cụ thể cho trang chủ. Ví dụ như service lấy dữ liệu cho banner, service lấy danh sách sản phẩm nổi bật.
    -   **`home.module.ts`**: Định nghĩa module cho trang chủ, import các component và service cần thiết.
    -   **`home-routing.module.ts`**: Cấu hình routing cho tính năng trang chủ.
-   **`about/`**: Chứa module cho trang giới thiệu.
    -   **`components/`**: Các component cụ thể cho trang giới thiệu. Ví dụ như thông tin công ty, đội ngũ nhân viên.
    -   **`services/`**: Các dịch vụ cụ thể cho trang giới thiệu. Ví dụ như service lấy thông tin công ty.
    -   **`about.module.ts`**: Định nghĩa module cho trang giới thiệu, import các component và service cần thiết.
    -   **`about-routing.module.ts`**: Cấu hình routing cho tính năng giới thiệu.

### Partials

-   **`header/`**: Chứa component header của ứng dụng. Bao gồm logo, menu navigation, và các chức năng như tìm kiếm, giỏ hàng.
-   **`footer/`**: Chứa component footer của ứng dụng. Bao gồm thông tin liên hệ, links đến các trang quan trọng, và các icon mạng xã hội.

### Các file gốc

-   **`app.routes.ts`**: File cấu hình routing chính cho ứng dụng. Định nghĩa các route chính và lazy loading cho các module.
-   **`app.component.ts`**: Component gốc của ứng dụng Angular. Chứa layout chính của ứng dụng.
-   **`app.config.ts`**: Cấu hình ứng dụng. Định nghĩa các provider, import các module cốt lõi.
-   **`app.config.server.ts`**: Cấu hình ứng dụng server-side. Chứa các cấu hình đặc biệt cho việc render phía server.

## Mô tả chi tiết về ứng dụng Angular SSR (Server-Side Rendering)

Ứng dụng Angular SSR này sử dụng công nghệ Server-Side Rendering để cải thiện hiệu suất và SEO. Dưới đây là một số điểm chính:

1. **Server-Side Rendering**: Ứng dụng được render lần đầu tiên trên server, giúp tăng tốc độ tải trang ban đầu và cải thiện SEO.

2. **Hydration**: Sau khi trang được tải, Angular sẽ "hydrate" ứng dụng, kích hoạt các tương tác phía client mà không cần tải lại toàn bộ trang.

3. **Universal**: Sử dụng Angular Universal để hỗ trợ SSR, cho phép ứng dụng chạy trên cả môi trường server và client.

4. **Prerendering**: Có thể sử dụng tính năng prerendering để tạo ra các trang tĩnh cho nội dung ít thay đổi, giúp tăng tốc độ tải trang hơn nữa.

5. **Dynamic Imports**: Sử dụng dynamic imports để lazy load các module, giúp giảm kích thước bundle ban đầu.

6. **State Transfer**: Sử dụng TransferState để truyền dữ liệu từ server xuống client, tránh việc phải gọi API lại khi ứng dụng chạy phía client.

7. **SEO Optimization**: Tích hợp Meta service để quản lý các thẻ meta động, hỗ trợ tốt cho SEO.

8. **Performance Optimization**: Sử dụng các kỹ thuật như Tree-Shaking, AOT compilation để tối ưu kích thước bundle.

9. **Server-Side Caching**: Implement caching strategy trên server để cải thiện hiệu suất cho các request lặp lại.

10. **Progressive Web App (PWA)**: Tích hợp PWA để cải thiện trải nghiệm người dùng trên các thiết bị di động.

Ứng dụng này được thiết kế để tận dụng tối đa lợi ích của SSR, cung cấp trải nghiệm người dùng tốt nhất có thể trong khi vẫn đảm bảo hiệu suất và khả năng SEO tối ưu.
