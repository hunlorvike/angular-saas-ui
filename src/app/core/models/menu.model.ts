export interface IIcon {
    /** Tên của icon */
    name: string;

    /**
     * Kiểu của icon:
     * - 'outlined' cho icon có đường viền ngoài
     * - 'filled' cho icon đổ đầy
     */
    type: 'outlined' | 'filled';
}

export interface IMenu {
    /** ID duy nhất của mục menu, có thể là số hoặc chuỗi */
    id: number | string;

    /** ID của mục menu cha, dùng để tạo cấu trúc cây menu */
    fatherId: number | string;

    /** Đường dẫn URL mà mục menu sẽ điều hướng đến khi được chọn */
    path: string;

    /** Tên hiển thị của mục menu trên giao diện người dùng */
    name: string;

    /**
     * Loại của mục menu:
     * 'C' - Mục điều hướng chính (menu)
     * 'F' - Chức năng hoặc nút bấm (button)
     */
    type: 'C' | 'F';

    /** Biểu tượng hiển thị bên cạnh tên menu (tùy chọn) */
    icon?: IIcon;

    /** Biểu tượng thay thế khi showIcon là false (tùy chọn) */
    alIcon?: IIcon;

    /** Trạng thái mở của menu (true: đang mở, false: đang đóng) */
    open?: boolean;

    /** Trạng thái chọn của menu (true: đang được chọn, false: không được chọn) */
    selected?: boolean;

    /** Danh sách các menu con, tạo cấu trúc cây phân cấp */
    children?: IMenu[];

    /**
     *  Mã quyền hạn để xác định quyền truy cập vào mục menu
     * dmvn:default, dmvn:a, dmvn:sa
     *  */
    codes?: string[];

    /**
     * Flag đánh dấu cách mở liên kết:
     * 0 - Mở trong tab hiện tại
     * 1 - Mở trong tab mới
     */
    newLinkFlag?: 0 | 1;
}
