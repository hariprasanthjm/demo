export class AddVehicle {
    registration_number: string;
    engine_number: string;
    engine_chasis_number: string;
    vehicle_model: string;
    vehicle_year: number;
    vehicle_tonnage: number;
    fc_expiry_date: any;
    insurance_expiry_date: any;
    vehicle_docs: boolean;
}


export const vehicleDatas: AddVehicle[] = [
    {
        registration_number: 'TN55K4563',
        engine_number: 'EFSV59656l',
        engine_chasis_number: 'FDFDKG54848',
        vehicle_model: 'Tata Prima 4928.S',
        vehicle_year: 2016,
        vehicle_tonnage: 49,
        fc_expiry_date: '20-10-2018',
        insurance_expiry_date: '6-5-2018',
        vehicle_docs: true
    },
    {
        registration_number: 'TN32LB9966',
        engine_number: 'FSFSFV56152l',
        engine_chasis_number: 'FDFDKG54848',
        vehicle_model: 'Mahindra Blazo',
        vehicle_year: 2013,
        vehicle_tonnage: 40,
        fc_expiry_date: '20-10-2017',
        insurance_expiry_date: '6-5-2017',
        vehicle_docs: true
    },
    {
        registration_number: 'TN32LB2066',
        engine_number: 'QEFSSV59656l',
        engine_chasis_number: 'STGDFDS6655',
        vehicle_model: 'Mahindra Blazo',
        vehicle_year: 2012,
        vehicle_tonnage: 40,
        fc_expiry_date: '3-1-2018',
        insurance_expiry_date: '2-5-2018',
        vehicle_docs: true
    },
    {
        registration_number: 'TN45P6610',
        engine_number: 'DSSFSFE662',
        engine_chasis_number: 'DSDSDRT55',
        vehicle_model: 'Tata Prima 4928.S',
        vehicle_year: 2016,
        vehicle_tonnage: 49,
        fc_expiry_date: '20-10-2018',
        insurance_expiry_date: '6-5-2018',
        vehicle_docs: true
    },
    {
        registration_number: 'TN09CC6694',
        engine_number: 'DGDTY5842',
        engine_chasis_number: 'FSF5SFSFF5S',
        vehicle_model: 'BharatBenz 3123R',
        vehicle_year: 2010,
        vehicle_tonnage: 35,
        fc_expiry_date: '20-10-2018',
        insurance_expiry_date: '6-5-2018',
        vehicle_docs: true
    },
    {
        registration_number: 'TN55E4757',
        engine_number: 'EFSV59656l',
        engine_chasis_number: 'FDFDKG54848',
        vehicle_model: 'Eicher Pro 1114XP',
        vehicle_year: 2016,
        vehicle_tonnage: 49,
        fc_expiry_date: '20-10-2018',
        insurance_expiry_date: '6-5-2018',
        vehicle_docs: true
    }
];
