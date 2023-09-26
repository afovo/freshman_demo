import { defineStore } from "pinia"
import allUsers from '../assets/json/users.json'

export const usersStore = defineStore('users', {
    state: () => (allUsers),
    getters: {
    },
    actions: {
        addUser(ruleForm: any): boolean {
            this.$state.push({ id: this.$state[this.$state.length-1].id + 1, uname: ruleForm.uname, uid: ruleForm.uid, grade: ruleForm.grade, password: ruleForm.password, isAdmin: false });
            return true;
        },
        updateInfo(id: number, uname: string, uid: string, grade: string, password: string): boolean {
            for (var i = 0; i < this.$state.length; i++) {
                if (this.$state[i].id === id) {
                    this.$state[i].uname = uname;
                    this.$state[i].uid = uid;
                    this.$state[i].grade = grade;
                    this.$state[i].password = password;
                    return true;
                }
            }
            return false;
        },
        deleteUser(id: number): boolean {
            var i = 0;
            for (; i < this.$state.length; i++) {
                if (this.$state[i].id === id) {
                    break;
                }
            }
            this.$state.splice(i, 1);
            return true;
        }
    },
})