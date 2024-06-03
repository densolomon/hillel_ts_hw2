class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
    _areas: string[] = [];
    _lecturers: string[] = []; // Name, surname, position, company, experience, courses, contacts

    addArea(area: string): void {
        this._areas.push(area);
    }

    removeArea(area: string): void {
        this._areas = this._areas.filter((element: string): boolean => element !== area);
    }

    addLecturer(lecturer: string): void {
        this._lecturers.push(lecturer);
    }

    removeLecturer(lecturer: string): void {
        this._lecturers = this._lecturers.filter((element: string): boolean => element !== lecturer);
    }


    get areas(): string[] {
        return this._areas;
    }

    get lecturers(): string[] {
        return this._lecturers;
    }
}

class Area {
    // implement getters for fields and 'add/remove level' methods
    _levels: number[] = [];
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    addLevel(level: number): void {
        this._levels.push(level);
    }

    removeLevel(level: number): void {
        this._levels = this._levels.filter((element: number): boolean => element !== level);
    }

    get levels(): number[] {
        return this._levels;
    }

    get name(): string {
        return this._name;
    }
}

class Level {
    // implement getters for fields and 'add/remove group' methods
    _groups: string[] = [];
    _name: string;
    _description: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    addGroup(group: string): void {
        this._groups.push(group);
    }

    removeGroup(group: string) {
        this._groups = this._groups.filter((element: string): boolean => element !== group);
    }

    get groups(): string[] {
        return this._groups;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }
}

class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods

    _area: string = '';
    _status: string = '';
    _students: string[] = []; // Modify the array so that it has a valid toSorted method*
    _directionName: string;
    _levelName: string;

    constructor(directionName: string, levelName: string) {
        this._directionName = directionName;
        this._levelName = levelName;
    }

    showPerformance(): string[] {
        const sortedStudents = this._students.toSorted((a: string, b: number) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }

    addStudent(student: string): void {
        this._students.push(student);
    }

    removeStudent(student: string): void {
        this._students = this._students.filter((element: string): boolean => element !== student);
    }

    set status(status: string) {
        this._status = this._status + ' ' + status;
    }
}

class Student {
    // implement 'set grade' and 'set visit' methods

    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: number[] = []; // workName: mark
    _visits: number[] = []; // lesson: present

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age() {
        return new Date().getFullYear() - this._birthYear;
    }

    set grade(grade: number) {
        this._grades.push(grade);
    }

    set visit(visit: number) {
        this._visits.push(visit);
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade: number = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}