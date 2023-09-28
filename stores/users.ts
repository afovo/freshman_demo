import { defineStore } from "pinia"
import allUsers from '../assets/json/users.json'

export const usersStore = defineStore('users', {
    state: () => ({
        data: new Array<any>,
        loading: false,
        error: null
    }),
    getters: {
        getAllUsers(): Array<any> {
            return this.data
        },        
    },
    actions: {
        async setAllUsers() {
            try {
                this.loading = true;
                const data: Array<any> = await new Promise(resolve => {
                    setTimeout(() => {
                        resolve(allUsers)
                    }, 500)
                })
                this.data = data
            } catch (error: any) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },
        getUserByID(id:number): any {
            var info = {
                id: 0,
                uname: '',
                uid: '',
                grade: '',
                password: '',
                lastEdited:''
            }
            this.data.forEach((user) => {
                if (user.id === id) {
                    info.id = user.id;
                    info.uid = user.uid;
                    info.uname = user.uname;
                    info.grade = user.grade;
                    info.password = user.password;
                    info.lastEdited = user.lastEdited;
                    return;
                }
            })
            return info;
        },
        addUser(ruleForm: any): number {
            this.data.push({ id: this.data[this.data.length - 1].id + 1, uname: ruleForm.uname, uid: ruleForm.uid, grade: ruleForm.grade, password: ruleForm.password, isAdmin: false, lastEdited:"" });
            return this.data.length - 1;
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
        },
        updateInfo(info: any): boolean {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].id === info.id) {
                    this.data[i].uname = info.uname;
                    this.data[i].uid = info.uid;
                    this.data[i].grade = info.grade;
                    this.data[i].password = info.password;
                    this.data[i].lastEdited = info.lastEdited;
                    return true;
                }
            }
            return false;
        },
    },
})