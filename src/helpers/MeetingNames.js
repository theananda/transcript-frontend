export default {
    legislature (val) {
        const values = {
            'upper' : 'အမျိုးသားလွှတ်တော်',
            'lower' : 'ပြည်သူ့လွှတ်တော်',
            'union' : 'ပြည်ထောင်စုလွှတ်တော်'
        }

        return values[val];
    },
    term (val) {
        if (val <= 10) {

            return this.sequence(val) + 'လွှတ်တော်သက်တမ်း';

        } else {

            return '('+ this.transformNumbers(val) +')ကြိမ်မြောက်လွှတ်တော်သက်တမ်း';
            
        }
    },
    session (val) {
        if (val <= 10) {
            
            return this.sequence(val) + 'ပုံမှန်အစည်းအဝေး'; 

        } else {
            
            return '('+ this.transformNumbers(val) +')ကြိမ်မြောက်ပုံမှန်အစည်းအဝေး';

        }
        
    },
    sittingDay (val) {

        if (val <= 10) {
            
            return this.sequence(val) + 'နေ့မှတ်တမ်း';

        } else {
            
            return '('+ this.transformNumbers(val) +')ရက်မြောက်နေ့မှတ်တမ်း';

        }

        
    },
    sequence (val) {
        const values = {
            1 : 'ပထမ',
            2 : 'ဒုတိယ',
            3 : 'တတိယ',
            4 : 'စတုတ္ထ',
            5 : 'ပဥ္စမ',
            6 : 'ဆဋ္ဌမ',
            7 : 'သတ္တမ',
            8 : 'အဋ္ဌမ',
            9 : 'နဝမ',
            10 : 'ဒသမ'
        }

        return values[val];

    },
    transformNumbers(val) {

        const burmese_numbers = {
            0 : '၀',
            1 : '၁',
            2 : '၂',
            3 : '၃',
            4 : '၄',
            5 : '၅',
            6 : '၆',
            7 : '၇',
            8 : '၈',
            9 : '၉' 
        };

        var output = '';

        var sNumber = val.toString();

        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            output += burmese_numbers[sNumber[i]];
        }

        return output;

    }
}