import { TestBed, async } from '@angular/core/testing';
import { GroupByPipe } from './group-by.pipe';

describe('GroupByPipe', () => {
    let pipe: GroupByPipe;
    let a: any[];

    beforeEach(() => {
        pipe = new GroupByPipe();
        a = [{ "name": "Industry", "value": "Hardware" },
        { "name": "Industry", "value": "Software" },
        { "name": "Industry", "value": "Life Science" },
        { "name": "Region / City", "value": "Northern California" },
        { "name": "Region / City", "value": "Southern California" }];
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('works well', () => {
        let result = pipe.transform(a, "name")
        expect(result.length).toBe(2);
    });

});