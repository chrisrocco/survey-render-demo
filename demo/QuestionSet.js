class QuestionSet {
    constructor(survey){
        this.survey = survey;
        this.map = {};
    }

    initMap(){
        QuestionSet.isAlive(this.survey);
    }

    static isCategoryAlive(node, memoize){
        if(typeof memoize[node.id] !== 'undefined') return memoize[node.id];
        if(Object.keys(node.questions).length === 0){
            memoize[node.id] = false;
            return false;
        }
        let result = false;
        for(let key in node.children){
            if(QuestionSet.isCategoryAlive(node.children[key], memoize)) result = true;
        }
        memoize[node.id] = result;
        return result;
    }

}