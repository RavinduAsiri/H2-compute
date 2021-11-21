import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'new-application',
    templateUrl: './new-application.component.html',
    styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {

    // isLinear = true;
    values: Values[] = [];
    private _firstFormGroup!: FormGroup;
    private _secondFormGroup!: FormGroup;
    selectedFiles: any;

    public get firstFormGroup(): FormGroup {
        return this._firstFormGroup;
    }
    public set firstFormGroup(value: FormGroup) {
        this._firstFormGroup = value;
    }
    public get secondFormGroup(): FormGroup {
        return this._secondFormGroup;
    }
    public set secondFormGroup(value: FormGroup) {
        this._secondFormGroup = value;
    }

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.values = [
            { number: 1, value: 'one' },
            { number: 2, value: 'two' },
            { number: 3, value: 'three' }
        ];
    }

    selectFile(event: Event) {
        this.selectedFiles = event.target;
    }
}

interface Values {
    number: number;
    value: string;
}