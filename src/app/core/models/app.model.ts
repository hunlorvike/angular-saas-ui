/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Định nghĩa các thuộc tính cơ bản cho phân trang.
 */
export interface IBasePageInfo {
    /**
     * Số trang hiện tại (chỉ số bắt đầu từ 1).
     */
    currentPage: number;

    /**
     * Số lượng mục hiển thị trên mỗi trang.
     */
    pageSize: number;

    /**
     * Tổng số mục tìm thấy cho tất cả các trang.
     */
    totalItems: number;

    /**
     * Tổng số trang có thể có dựa trên tổng số mục và kích thước trang.
     */
    totalPages?: number;
}

/**
 * Định nghĩa các thuộc tính bổ sung cho phân trang.
 */
export interface IExtendedPageInfo<T> extends IBasePageInfo {
    /**
     * Danh sách các mục tìm thấy cho trang hiện tại.
     */
    items: T[];

    /**
     * Số trang đầu tiên (thường là 1).
     */
    firstPage?: number;

    /**
     * Số trang trước đó (trang ngay trước trang hiện tại).
     */
    previousPage?: number;

    /**
     * Số trang tiếp theo (trang ngay sau trang hiện tại).
     */
    nextPage?: number;

    /**
     * Số trang cuối cùng.
     */
    lastPage?: number;

    /**
     * Xác định xem trang hiện tại có phải là trang đầu tiên không.
     */
    isFirstPage?: boolean;

    /**
     * Xác định xem trang hiện tại có phải là trang cuối cùng không.
     */
    isLastPage?: boolean;

    /**
     * Xác định xem có trang nào trước trang hiện tại không.
     */
    hasPreviousPage?: boolean;

    /**
     * Xác định xem có trang nào sau trang hiện tại không.
     */
    hasNextPage?: boolean;

    /**
     * Số lượng trang để điều hướng xung quanh trang hiện tại.
     * Ví dụ: 5 trang gần nhất.
     */
    navigatePages?: number;

    /**
     * Danh sách các số trang để điều hướng.
     */
    navigatePageNumbers?: number[];
}

/**
 * Định nghĩa tiêu chí tìm kiếm cho việc phân trang và sắp xếp kết quả.
 */
export interface ISearchCriteria {
    /**
     * Số trang hiện tại (chỉ số bắt đầu từ 1) để phân trang.
     */
    pageNumber: number;

    /**
     * Số lượng mục hiển thị trên mỗi trang.
     */
    pageSize: number;

    /**
     * Tên trường để sắp xếp kết quả, ví dụ: 'name', 'date'.
     * Nếu không cung cấp, kết quả sẽ không được sắp xếp.
     */
    sortBy?: string;

    /**
     * Thứ tự sắp xếp các kết quả.
     * 'asc' cho tăng dần và 'desc' cho giảm dần.
     */
    sortOrder?: 'asc' | 'desc';

    /**
     * Các bộ lọc tùy chỉnh để lọc kết quả.
     * Là một đối tượng với các cặp khóa-giá trị, nơi khóa là tên của bộ lọc và giá trị là giá trị lọc.
     */
    filters?: Record<string, any>;
}

/**
 * Thông tin phân trang cho một tập hợp các mục.
 * @template T Loại của các mục trong danh sách.
 */
export interface IPageInfo<T> extends IExtendedPageInfo<T> {
    /**
     * Trường để sắp xếp kết quả (ví dụ: 'name', 'date').
     * Nếu có, cho biết cách mà dữ liệu được sắp xếp.
     */
    sortBy?: string;

    /**
     * Thứ tự sắp xếp các kết quả.
     * 'asc' cho tăng dần và 'desc' cho giảm dần.
     */
    sortOrder?: 'asc' | 'desc';
}

/**
 * Kết quả tìm kiếm bao gồm thông tin phân trang và tiêu chí tìm kiếm.
 * @template T Loại của các mục trong danh sách kết quả.
 */
export interface ISearchResult<T> extends IPageInfo<T> {
    /**
     * Tiêu chí tìm kiếm được sử dụng để lấy kết quả này.
     */
    criteria: ISearchCriteria;
}

/**
 * Định nghĩa một tùy chọn cho các thành phần chọn lựa (select) hoặc điều khiển tương tự.
 */
export interface IOption {
    /**
     * Giá trị của tùy chọn, có thể là số hoặc chuỗi.
     */
    value: number | string;

    /**
     * Nhãn hiển thị của tùy chọn trong giao diện người dùng.
     */
    label: string;

    /**
     * (Tùy chọn) Xác định xem tùy chọn này có được chọn không.
     * Sử dụng cho các thành phần chọn nhiều hoặc để thiết lập giá trị mặc định.
     */
    selected?: boolean;
}

/**
 * Định nghĩa một tùy chọn trong cấu trúc chọn lựa phân cấp (cascader).
 */
export interface ICascadeOption {
    /**
     * Giá trị của tùy chọn, có thể là số hoặc chuỗi.
     */
    value: number | string;

    /**
     * Nhãn hiển thị của tùy chọn trong giao diện người dùng.
     */
    label: string;

    /**
     * (Tùy chọn) Danh sách các tùy chọn con của tùy chọn này.
     * Dùng để tạo cấu trúc phân cấp.
     */
    children?: ICascadeOption[];

    /**
     * (Tùy chọn) Xác định xem tùy chọn này có phải là nút lá không.
     * Nếu `true`, tùy chọn này không có tùy chọn con.
     */
    isLeaf?: boolean;
}
