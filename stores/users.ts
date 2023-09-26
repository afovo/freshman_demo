import { defineStore } from "pinia"
import allUsers from '../assets/json/users.json'

export const usersStore = defineStore('users', {
    state: () => ({
        data: null,
        loading: false,
        error: null
    }),
    getters: {
        async getAllUsers() {
            try {
                this.loading = true;
                const data = await new Promise(resolve => {
                    setTimeout(() => {
                        resolve(allUsers)
                    }, 500)
                })
                this.data = data
                return data
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },
    },
    actions: {
        addUser(ruleForm: any): number {
            this.data.push({ id: this.data[this.data.length - 1].id + 1, uname: ruleForm.uname, uid: ruleForm.uid, grade: ruleForm.grade, password: ruleForm.password, isAdmin: false });
            return this.data.length - 1;
        },
        updateInfo(id: number, uname: string, uid: string, grade: string, password: string): boolean {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].id === id) {
                    this.data[i].uname = uname;
                    this.data[i].uid = uid;
                    this.data[i].grade = grade;
                    this.data[i].password = password;
                    return true;
                }
            }
            return false;
        },
        deleteUser(id: number): number {
            var i = 0;
            for (; i < this.data.length; i++) {
                if (this.data[i].id === id) {
                    break;
                }
            }
            this.data.splice(i, 1);
            return this.data.length - 1;
        }
    },
})