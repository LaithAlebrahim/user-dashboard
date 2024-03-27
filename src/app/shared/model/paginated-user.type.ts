import { User } from "./user.type";

export interface PaginatedUser{
    page: number;
    per_page: number;
    total: number;
    data: User[];
}