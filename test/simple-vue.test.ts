import { Equal, Expect, SimpleVue } from '../src';

SimpleVue({
    data() {
        // @ts-expect-error expected error testº
        this.firstname;
        // @ts-expect-error expected error test
        this.getRandom();
        // @ts-expect-error expected error test
        this.data();

        return {
            firstname: 'Type',
            lastname: 'Challenges',
            amount: 10,
        };
    },
    computed: {
        fullname() {
            return `${this.firstname} ${this.lastname}`;
        },
    },
    methods: {
        getRandom() {
            return Math.random();
        },
        hi() {
            alert(this.amount);
            alert(this.fullname.toLowerCase());
            alert(this.getRandom());
        },
        test() {
            const fullname = this.fullname;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const cases: [Expect<Equal<typeof fullname, string>>] = [] as any;
        },
    },
});
